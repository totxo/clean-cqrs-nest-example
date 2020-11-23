import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ListUsersQuery } from '../../application/queries/list-users.query';

@Controller('users')
export class UsersGetController {
  constructor(
    private readonly queryBus: QueryBus
  ) {
  }

  @Get()
  findAll() {
    return this.queryBus.execute(new ListUsersQuery());
  }
}
