import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListUsersQuery } from '../list-users.query';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { User } from '../../../domain/entities/user.entity';

@QueryHandler(ListUsersQuery)
export class ListUsersHandler implements IQueryHandler<ListUsersHandler> {

  constructor(
    private userRepository: UserRepository
  ) {
  }

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }

}
