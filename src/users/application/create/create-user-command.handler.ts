import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { UserCreator } from './user-creator';
import { UserName } from '../../domain/user-name.valueobject';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {

  constructor(
    private userCreator: UserCreator
  ) {
  }

  async execute(command: CreateUserCommand): Promise<void> {

    const name = new UserName(command.name)
    console.log(name);
    await this.userCreator.create(name);
  }
}
