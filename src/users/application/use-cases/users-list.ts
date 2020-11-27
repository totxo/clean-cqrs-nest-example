import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class UsersList {

  constructor(
    private userRepository: UserRepository
  ) {
  }

  public findAll() {
    return this.userRepository.findAll()
  }
}
