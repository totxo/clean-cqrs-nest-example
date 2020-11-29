import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListUsersQuery } from './list-users.query';
import { UsersList } from './users-list';

@QueryHandler(ListUsersQuery)
export class ListUsersQueryHandler implements IQueryHandler<ListUsersQueryHandler> {

  constructor(
    private usersList: UsersList
  ) {
  }

  async execute(): Promise<any> {
    return this.usersList.findAll();
  }

}
