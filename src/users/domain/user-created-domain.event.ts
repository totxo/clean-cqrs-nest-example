import { IEvent } from '@nestjs/cqrs';
import { DomainEvent } from '../../shared/domain/event/domain.event';
import { User } from './user.entity';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export default // @ts-ignore
class UserCreatedDomainEvent extends DomainEvent implements IEvent  {

  constructor(
    public readonly user: User,
  ) {
    super();
  }
}
