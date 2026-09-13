import Stripe from "stripe";

let cachedClient: Stripe | null = null;

export function getStripeClient(): Stripe {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to your environment to enable checkout.",
    );
  }
  if (!cachedClient) {
    cachedClient = new Stripe(apiKey);
  }
  return cachedClient;
}
