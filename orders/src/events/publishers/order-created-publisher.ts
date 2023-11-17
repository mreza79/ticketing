import { Publisher, OrderCreatedEvent, Subjects } from "@mrjtickets/common";

class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

export { OrderCreatedPublisher };
