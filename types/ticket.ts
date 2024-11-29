import { Doc } from "@/convex/_generated/dataModel";

export interface TicketWithEvent extends Doc<"tickets"> {
  event: Doc<"events">;
}
