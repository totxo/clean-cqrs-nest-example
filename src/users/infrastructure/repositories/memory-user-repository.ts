import { UserRepository } from '../../domain/repositories/user.repository';
import { CreateUserDto } from '../../domain/dto/create-user.dto';
import { User } from '../../domain/entities/user.entity';
import { Logger } from '@nestjs/common';

export class MemoryUserRepository implements UserRepository {

  private logger = new Logger('MemoryUserRepository')
  private users = [];


  async create(payload: CreateUserDto) {
    const { name } = payload;
    const newUser = new User(name);
    this.users.push(newUser)

    this.logger.verbose(`Added user: ${JSON.stringify(newUser)}`);
  }

  async findAll() {
    return this.users;
  }
}
