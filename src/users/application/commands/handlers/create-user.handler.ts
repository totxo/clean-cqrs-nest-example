import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UserRepository } from '../../../domain/repositories/user.repository';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

  constructor(
    private userRepository: UserRepository
  ) {
  }

  async execute(command: CreateUserCommand): Promise<void> {
    this.userRepository.create(command.payload);
  }
}
