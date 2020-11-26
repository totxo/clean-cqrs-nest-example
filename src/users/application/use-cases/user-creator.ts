import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class UserCreator {

  constructor(
    @Inject('USER_REPOSITORY') private userRepository: UserRepository
  ) {
  }

  public create(user: User) {
    this.userRepository.create(user)
  }


}
