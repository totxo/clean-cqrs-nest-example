import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UserCreator } from '../../use-cases/user-creator';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

  constructor(
    private userCreator: UserCreator
  ) {
  }

  async execute(command: CreateUserCommand): Promise<void> {
    await this.userCreator.create(command.name);
  }
}
