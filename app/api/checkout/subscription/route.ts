import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { MEMBERSHIP_PLANS, type MembershipPlan } from "@/lib/constants";

const PRICE_ENV_MAP: Record<MembershipPlan["id"], string | undefined> = {
  basic: process.env.STRIPE_PRICE_BASIC,
  plus: process.env.STRIPE_PRICE_PLUS,
  school: process.env.STRIPE_PRICE_SCHOOL,
};

export async function POST(request: NextRequest) {
  const { planId } = await request.json();
  const plan = MEMBERSHIP_PLANS.find((p) => p.id === planId);

  if (!plan) {
    return NextResponse.json({ error: "Unknown membership plan" }, { status: 404 });
  }

  const supabase = await getSupabaseServerClient();
  const user = supabase ? (await supabase.auth.getUser()).data.user : null;

  if (!user) {
    return NextResponse.json(
      { error: "Please log in to subscribe.", requiresAuth: true },
      { status: 401 },
    );
  }

  const priceId = PRICE_ENV_MAP[plan.id];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? request.nextUrl.origin;

  try {
    if (!priceId) {
      throw new Error(`Stripe price ID for the ${plan.name} plan is not configured.`);
    }

    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: user.email ?? undefined,
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { planId: plan.id, userId: user.id },
      subscription_data: { metadata: { planId: plan.id, userId: user.id } },
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
