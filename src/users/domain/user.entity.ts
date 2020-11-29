import { UserName } from './user-name.valueobject';
import UserCreatedDomainEvent from './user-created-domain.event';
import { CustomAggregateRoot } from '../../shared/domain/aggregate/custom-aggregate.root';

export class User extends CustomAggregateRoot {

  constructor(
    private readonly name: UserName,
  ) {
    super();
  }

  public getName() {
    return this.name;
  }

  public static create(name: UserName): User {

    const user = new User(name);

    user.record(new UserCreatedDomainEvent(name.getValue()));

    return user;
  }

}
