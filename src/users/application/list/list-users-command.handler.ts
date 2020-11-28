import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListUsersQuery } from './list-users.query';
import { UserRepository } from '../../domain/user.repository';
import { User } from '../../domain/user.entity';
import { UsersList } from './users-list';

@QueryHandler(ListUsersQuery)
export class ListUsersCommandHandler implements IQueryHandler<ListUsersCommandHandler> {

  constructor(
    private usersList: UsersList
  ) {
  }

  async execute(): Promise<any> {
    return this.usersList.findAll();
  }

}
