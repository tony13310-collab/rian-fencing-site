import { allEvents } from "@/data/events";
import { makeEventId } from "@/data/eventDetails";
import EventClient from "./EventClient";

export function generateStaticParams() {
  return allEvents.map((e) => ({
    id: makeEventId(e.date, e.event),
  }));
}

export default function EventPage() {
  return <EventClient />;
}
