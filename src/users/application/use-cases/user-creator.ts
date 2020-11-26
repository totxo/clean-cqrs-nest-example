import { Injectable } from '@nestjs/common';
import { FileUserRepository } from '../../infrastructure/repositories/memory-user-repository';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class UserCreator {

  constructor(
    private fileUserRepository: FileUserRepository
  ) {
  }

  public create(user: User) {
    this.fileUserRepository.create(user)
  }
}
