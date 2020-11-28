import { CreateUserCommandHandler } from './create-user-command.handler';
import { UserCreatedEventHandler } from './user-created-event.handler';

export const CommandHandlers = [
  CreateUserCommandHandler
]

export const EventHandlers = [
  UserCreatedEventHandler
]
