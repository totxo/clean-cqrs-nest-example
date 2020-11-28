import { AggregateRoot } from '@nestjs/cqrs';
import { UserName } from './user-name.valueobject';

export class User extends AggregateRoot {

  constructor(
    private readonly name: UserName
  ) {
    super();
  }

  public static create(name: UserName): User {
    const user = new User(name);
    return user;
  }

  getName(): UserName {
    return this.name;
  }
}
