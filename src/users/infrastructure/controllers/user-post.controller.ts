import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../../application/create/create-user.command';
import { CreateUserDto } from '../../domain/create-user.dto';

@Controller('users')
export class UserPostController {

  constructor(
    private readonly commandBus: CommandBus,
  ) {
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(createUserDto.name))
  }
}
