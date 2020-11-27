import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { USER_REPOSITORY, UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class UserCreator {

  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: UserRepository
  ) {
  }

  public create(name: string) {
    const user = new User(name)
    this.userRepository.create(user)
  }


}
