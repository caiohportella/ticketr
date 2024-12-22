"use server";

import { stripe } from "@/lib/stripe";
import { AccountStatus } from "@/types/stripe";

export async function getStripeConnectAccountStatus(
  stripeAccountId: string
): Promise<AccountStatus> {
  if (!stripeAccountId) throw new Error("Stripe account id is not set");

  try {
    const account = await stripe.accounts.retrieve(stripeAccountId);

    return {
      isActive:
        account.details_submitted &&
        !account.requirements?.currently_due?.length,
      requiresInformation: !!(
        account.requirements?.currently_due?.length ||
        account.requirements?.eventually_due?.length ||
        account.requirements?.past_due?.length
      ),
      requirements: {
        currently_due: account.requirements?.currently_due || [],
        eventually_due: account.requirements?.eventually_due || [],
        past_due: account.requirements?.past_due || [],
      },
      chargesEnabled: account.charges_enabled,
      payoutsEnabled: account.payouts_enabled,
    };
  } catch (err) {
    console.error("Error getting Stripe Connect account status", err);
    throw new Error("Failed to get Stripe Connect account status");
  }
}
