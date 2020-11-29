import { User } from './user.entity';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface UserRepository {

  save(user: User): void;

  findAll(): Promise<any>;

}
