import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import UserCreatedDomainEvent from '../../domain/user-created-domain.event';
import { Logger } from '@nestjs/common';

@EventsHandler(UserCreatedDomainEvent)
export class UserCreatedEventHandler implements IEventHandler<UserCreatedEventHandler> {

  private logger = new Logger('UserCreatedEventHandler');

  async handle(event: UserCreatedEventHandler): Promise<any> {

    //@TODO implement rabbit

    const payload = {
      data: {
        id: event['eventId'],
        type: 'vasco.user.event.1.user.created',
        occurred_on: event['occurredOn'],
        attributes: {
          name: event['name']
        }
      },
      meta: {
        host: 'loaclhost'
      }
    }
    this.logger.debug(payload);
  }
}
