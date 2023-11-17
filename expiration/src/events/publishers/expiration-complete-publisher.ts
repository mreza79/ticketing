import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@mrjtickets/common";

class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}

export { ExpirationCompletePublisher };
