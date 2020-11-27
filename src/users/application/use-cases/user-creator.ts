import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class UserCreator {

  constructor(
    private userRepository: UserRepository
  ) {
  }

  public create(name: string) {
    const user = new User(name)
    this.userRepository.create(user)
  }


}
