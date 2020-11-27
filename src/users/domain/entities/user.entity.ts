import { AggregateRoot } from '@nestjs/cqrs';
import { InternalServerErrorException } from '@nestjs/common';

export class User extends AggregateRoot {

  constructor(
    private readonly name: string
  ) {
    super();
    this.validate()
  }

  validate(): void {
    if (!this.name) {
      throw new InternalServerErrorException();
    }
  }
}
