import { User } from '../entities/user.entity';

export abstract class UserRepository {

  abstract create(user: User): void;
  abstract async findAll(): Promise<any>;

}
