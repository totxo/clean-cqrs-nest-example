import { User } from './user.entity';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface UserRepository {

  create(user: User): void;
  findAll(): Promise<any>;

}