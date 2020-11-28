import { ICommand } from '@nestjs/cqrs';

export class CreateUserCommand {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  constructor( public name: string): ICommand {
  }
}
