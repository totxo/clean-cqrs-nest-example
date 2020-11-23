import { CreateUserDto } from '../../domain/dto/create-user.dto';

export class CreateUserCommand {
  constructor( public payload: CreateUserDto) {
  }
}
