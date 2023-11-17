import { Publisher, Subjects, TicketUpdatedEvent } from "@mrjtickets/common";

class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

export { TicketUpdatedPublisher };
