import { AggregateRoot } from '@nestjs/cqrs';
import { DomainEvent } from '../event/domain.event';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomAggregateRoot extends AggregateRoot {

  private recordedDomainEvents: DomainEvent[] = [];

  public pullDomainEvents(): DomainEvent[] {
    const recordedDomainEvents = this.recordedDomainEvents;
    this.recordedDomainEvents = [];
    return recordedDomainEvents;
  }

  public record(event: DomainEvent): void {
    this.recordedDomainEvents.push(event);
  }

}
