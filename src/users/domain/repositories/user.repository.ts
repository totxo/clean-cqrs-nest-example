import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract async create(payload: CreateUserDto): Promise<void>

  abstract async findAll(): Promise<User[]>
}
