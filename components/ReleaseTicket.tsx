"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useState } from "react";
import { XCircle } from "lucide-react";

const ReleaseTicket = ({
  eventId,
  waitingListId,
}: {
  eventId: Id<"events">;
  waitingListId: Id<"waitingList">;
}) => {
  const [isReleasing, setIsReleasing] = useState(false);

  const releaseTicket = useMutation(api.waitingList.releaseTicket);

  const handleRelease = async () => {
    if (!confirm("Are you sure you want to release this ticket?")) return;

    try {
      setIsReleasing(true);
      await releaseTicket({ eventId, waitingListId });
    } catch (err) {
      console.error("Error releasing ticket", err);
    } finally {
      setIsReleasing(false);
    }
  };

  return (
    <button
      onClick={handleRelease}
      disabled={isReleasing}
      className="release-button"
    >
      <XCircle className="w-4 h-4" />
      {isReleasing ? "Releasing..." : "Release Ticket Offer"}
    </button>
  );
};
export default ReleaseTicket;
