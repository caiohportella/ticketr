import { TicketWithEvent } from "@/types/ticket";

export const downloadTicketData = (ticket: TicketWithEvent) => {
  const ticketData = {
    event: ticket.event.name,
    date: new Date(ticket.event.eventDate).toLocaleDateString(),
    location: ticket.event.location,
    purchaseDate: new Date(ticket.purchasedAt).toLocaleDateString(),
  };

  const blob = new Blob([JSON.stringify(ticketData, null, 2)], {
    type: "application/json",
  });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ticket-${ticket.event.name}.json`;
  link.click();
  window.URL.revokeObjectURL(url);
};

export const shareTicket = async (ticket: TicketWithEvent) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: `Ticket for ${ticket.event.name}`,
        text: `Check out my ticket for ${ticket.event.name} on ${new Date(ticket.event.eventDate).toLocaleDateString()}!`,
        url: window.location.href,
      });
    } catch (err) {
      console.error("Error sharing:", err);
    }
  } else {
    // Fallback - copy to clipboard
    await navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  }
};
