import { UserRepository } from '../../domain/repositories/user.repository';
import { CreateUserDto } from '../../domain/dto/create-user.dto';
import { User } from '../../domain/entities/user.entity';

export class MemoryUserRepository implements UserRepository {
  private users = [];

  async create(payload: CreateUserDto) {
    const { name } = payload;
    const newUser = new User(name);
    this.users.push(newUser)
  }

  async findAll() {
    return this.users;
  }
}
