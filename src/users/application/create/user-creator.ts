import { Inject, Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { User } from '../../domain/user.entity';
import { USER_REPOSITORY, UserRepository } from '../../domain/user.repository';
import { UserName } from '../../domain/user-name.valueobject';

@Injectable()
export class UserCreator {

  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: UserRepository,
    private readonly eventBus: EventBus,
  ) {
  }

  public create(name: UserName): void {

    const user = User.create(name);

    this.userRepository.save(user);

    this.eventBus.publishAll(user.pullDomainEvents());
  }

}
