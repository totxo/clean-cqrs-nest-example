import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { USER_REPOSITORY, UserRepository } from '../../domain/repositories/user.repository';
import UserCreatedDomainEvent from '../../domain/events/user-created.event';
import { EventBus, EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class UserCreator {

  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: UserRepository,
    private readonly eventBus: EventBus
  ) {
  }

  public async create(name: string) {
    const user = new User(name);
    this.userRepository.create(user);
    this.eventBus.publish(new UserCreatedDomainEvent(name));
  }


}
