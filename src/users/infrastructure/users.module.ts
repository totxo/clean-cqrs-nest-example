import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserPostController } from './controllers/user-post.controller';
import { CommandHandlers, EventHandlers } from '../application/create';
import { UsersGetController } from './controllers/users-get.controller';
import { QueryHandlers } from '../application/list';
import { UserCreator } from '../application/create/user-creator';
import { UsersList } from '../application/list/users-list';
import { USER_REPOSITORY } from '../domain/user.repository';
import { FileUserRepository } from './repositories/persistence/file-user-repository';

@Module({
  imports: [CqrsModule],
  controllers: [
    UserPostController,
    UsersGetController
  ],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: FileUserRepository
    },
    UserCreator,
    UsersList,
    ...EventHandlers,
    ...CommandHandlers,
    ...QueryHandlers
  ]
})

export class UsersModule {
}
