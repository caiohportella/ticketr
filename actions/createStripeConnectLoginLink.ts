"use server";

import { stripe } from "@/lib/stripe";

export async function createStripeConnectLoginLink(stripeAccountId: string) {
  if (!stripeAccountId) throw new Error("Stripe account id is not set");

  try {
    const loginLink = await stripe.accounts.createLoginLink(stripeAccountId);
    return loginLink.url;
  } catch (err) {
    console.error("Error creating login link", err);
    throw new Error("Failed to create Stripe Connect login link");
  }
}
