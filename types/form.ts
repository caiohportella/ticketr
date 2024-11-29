import { Id } from "@/convex/_generated/dataModel";

export type InitialEventData = {
  _id: Id<"events">;
  name: string;
  description: string;
  location: string;
  eventDate: number;
  price: number;
  totalTickets: number;
  imageStorageId?: Id<"_storage">;
}

export type EventFormType = {
  mode: "create" | "edit";
  initialData?: InitialEventData;
}
