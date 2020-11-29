import { UserRepository } from '../../../domain/user.repository';
import * as fs from 'fs';
import { User } from '../../../domain/user.entity';
import { Logger } from '@nestjs/common';

export class FileUserRepository implements UserRepository {

  private logger = new Logger('FileUserRepository');

  save(user: User) {

    const name = user.getName();

    fs.appendFile('fileUserRepository.txt', `{ name: ${name.getValue()} }`, (err) => {
      if (err) {
        this.logger.error('Failed trying save');
        throw new Error();
      }

      this.logger.verbose(`Added user: ${JSON.stringify(name.getValue())}`);
    });
  }

  async findAll() {
    const file = fs.readFileSync('fileUserRepository.txt', 'utf-8');
    this.logger.verbose(file);
    return file;
  }
}
