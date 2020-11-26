import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

export interface UserRepository {

  create(user: User): void
  findAll(): Promise<any>

}
