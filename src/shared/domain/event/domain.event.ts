import { v4 as uuid4 } from 'uuid';

export abstract class DomainEvent {

  private eventId: string;
  private occurredOn: string;

  protected constructor(
    eventId?: string,
    occurredOn?: string
  ) {
    this.eventId = eventId || uuid4();
    this.occurredOn = occurredOn || new Date().toString();
  }
}
