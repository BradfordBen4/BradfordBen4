import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripeClient } from "@/lib/stripe";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Webhook is not configured" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const stripe = getStripeClient();
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (supabase && session.mode === "subscription" && session.metadata?.userId) {
          await supabase.from("memberships").upsert(
            {
              user_id: session.metadata.userId,
              tier: session.metadata.planId,
              status: "active",
              stripe_customer_id: session.customer as string,
              stripe_subscription_id: session.subscription as string,
            },
            { onConflict: "user_id" },
          );
        } else if (supabase && session.mode === "payment" && session.metadata?.productSlug) {
          await supabase.from("purchases").insert({
            product_id: session.metadata.productSlug,
            stripe_session_id: session.id,
            amount: (session.amount_total ?? 0) / 100,
          });
        }
        break;
      }
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        if (supabase) {
          await supabase
            .from("memberships")
            .update({ status: subscription.status })
            .eq("stripe_subscription_id", subscription.id);
        }
        break;
      }
      default:
        break;
    }
  } catch (error) {
    console.error("Stripe webhook handler error:", error);
  }

  return NextResponse.json({ received: true });
}
