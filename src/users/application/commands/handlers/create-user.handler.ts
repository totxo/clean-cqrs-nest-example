import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UserCreator } from '../../use-cases/user-creator';
import { User } from '../../../domain/entities/user.entity';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

  constructor(
    private userCreator: UserCreator
  ) {
  }

  async execute(command: CreateUserCommand): Promise<void> {
    this.userCreator.create(command.name);
  }
}
