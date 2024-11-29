import { getConvexClient } from "@/lib/convex";
import { api } from "@/convex/_generated/api";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Ticket from "@/components/Ticket";

const TicketSuccess = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/");

  const convex = getConvexClient();
  const tickets = await convex.query(api.events.getUserTickets, { userId });
  const latestTickets = tickets[tickets.length - 1];

  if (!latestTickets) redirect("/");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Ticket Purchase Successul!
          </h1>
          <p className="mt-2 text-gray-600">
            Your ticket has been confirmed and ready to use
          </p>
        </div>

        <Ticket ticketId={latestTickets._id} />
      </div>
    </div>
  );
};

export default TicketSuccess;
