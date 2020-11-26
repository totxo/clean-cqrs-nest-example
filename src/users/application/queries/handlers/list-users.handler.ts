import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListUsersQuery } from '../list-users.query';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { User } from '../../../domain/entities/user.entity';
import { UsersList } from '../../use-cases/users-list';

@QueryHandler(ListUsersQuery)
export class ListUsersHandler implements IQueryHandler<ListUsersHandler> {

  constructor(
    private usersList: UsersList
  ) {
  }

  async execute(): Promise<any> {
    return this.usersList.findAll();
  }

}
