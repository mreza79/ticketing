import { Subjects, Publisher, PaymentCreatedEvent } from "@mrjtickets/common";

class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

export { PaymentCreatedPublisher };
