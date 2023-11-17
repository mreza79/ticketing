import { Publisher, OrderCancelledEvent, Subjects } from "@mrjtickets/common";

class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

export { OrderCancelledPublisher };
