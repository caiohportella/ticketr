import { Id } from "@/convex/_generated/dataModel";

export type StripeCheckoutMetaData = {
  eventId: Id<"events">;
  userId: string;
  waitingListId: Id<"waitingList">;
};

export type AccountStatus = {
  isActive: boolean;
  requiresInformation: boolean;
  requirements: {
    current_due: string[];
    eventually_due: string[];
    past_due: string[];
  };
  chargesEnabled: boolean;
  payoutsEnabled: boolean;
};
