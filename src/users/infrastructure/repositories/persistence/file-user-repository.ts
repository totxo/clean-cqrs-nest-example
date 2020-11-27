import { UserRepository } from '../../../domain/repositories/user.repository';
import * as fs from 'fs'
import { User } from '../../../domain/entities/user.entity';
import { Logger } from '@nestjs/common';

export class FileUserRepository extends UserRepository {

  private logger = new Logger('FileUserRepository')

  create(user: User) {
    const newUser = JSON.stringify(user)
    fs.appendFile('fileUserRepository.txt', newUser, (err) => {
      if (err) {
        this.logger.error('Failed trying save')
        throw new Error()
      }

      this.logger.verbose(`Added user: ${newUser}`);
    })
  }

  async findAll() {
    const file = fs.readFileSync('fileUserRepository.txt', 'utf-8');
    this.logger.verbose(file);
    return file;
  }
}
