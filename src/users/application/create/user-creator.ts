import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/user.entity';
import { USER_REPOSITORY, UserRepository } from '../../domain/user.repository';
import UserCreatedDomainEvent from '../../domain/user-created-domain.event';
import { EventBus } from '@nestjs/cqrs';
import { UserName } from '../../domain/user-name.valueobject';

@Injectable()
export class UserCreator {

  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: UserRepository,
    private readonly eventBus: EventBus
  ) {
  }

  public create(name: UserName): void {
    const user = User.create(name);
    this.userRepository.create(user);
    this.eventBus.publish(new UserCreatedDomainEvent(user));
  }


}
