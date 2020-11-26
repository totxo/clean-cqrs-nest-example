import { Injectable } from '@nestjs/common';
import { FileUserRepository } from '../../infrastructure/repositories/memory-user-repository';

@Injectable()
export class UsersList {

  constructor(
    private fileUserRepository: FileUserRepository
  ) {
  }

  public findAll() {
    return this.fileUserRepository.findAll()
  }
}
