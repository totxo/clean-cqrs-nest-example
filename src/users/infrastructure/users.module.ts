import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserPostController } from './controllers/user-post.controller';
import { CommandHandlers } from '../application/commands/handlers';
import { UsersGetController } from './controllers/users-get.controller';
import { QueryHandlers } from '../application/queries/handlers';
import { UserCreator } from '../application/use-cases/user-creator';
import { UsersList } from '../application/use-cases/users-list';
import { UserRepository } from '../domain/repositories/user.repository';
import { FileUserRepository } from './repositories/persistence/file-user-repository';

@Module({
  imports: [CqrsModule],
  controllers: [
    UserPostController,
    UsersGetController
  ],
  providers: [
    {
      provide: UserRepository,
      useClass: FileUserRepository
    },
    UserCreator,
    UsersList,
    ...CommandHandlers,
    ...QueryHandlers
  ]
})

export class UsersModule {
}
