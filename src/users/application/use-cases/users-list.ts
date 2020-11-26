import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class UsersList {

  constructor(
    @Inject('USER_REPOSITORY') private userRepository: UserRepository
  ) {
  }

  public findAll() {
    return this.userRepository.findAll()
  }
}
