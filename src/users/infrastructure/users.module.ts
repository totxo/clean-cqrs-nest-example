import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserPostController } from './controllers/user-post.controller';
import { UserRepository } from '../domain/repositories/user.repository';
import { MemoryUserRepository } from './repositories/memory-user-repository';
import { CommandHandlers } from '../application/commands/handlers';
import { UsersGetController } from './controllers/users-get.controller';
import { QueryHandlers } from '../application/queries/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [
    UserPostController,
    UsersGetController
  ],
  providers: [
    {
      provide: UserRepository,
      useClass: MemoryUserRepository
    },
    ...CommandHandlers,
    ...QueryHandlers
  ]
})

export class UsersModule {
}
