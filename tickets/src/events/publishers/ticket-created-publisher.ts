import { Publisher, Subjects, TicketCreatedEvent } from "@mrjtickets/common";

class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

export { TicketCreatedPublisher };
