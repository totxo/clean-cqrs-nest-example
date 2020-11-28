import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import UserCreatedDomainEvent from '../../domain/user-created-domain.event';
import { Logger } from '@nestjs/common';

@EventsHandler(UserCreatedDomainEvent)
export class UserCreatedEventHandler implements IEventHandler<UserCreatedEventHandler> {

  private logger = new Logger('UserCreatedEventHandler');

  async handle(event: UserCreatedEventHandler): Promise<any> {
    this.logger.verbose(JSON.stringify(event));
  }
}
