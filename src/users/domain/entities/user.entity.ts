import { AggregateRoot } from '@nestjs/cqrs';
import { InternalServerErrorException } from '@nestjs/common';

export class User {

  constructor(public name: string) {
    this.validate()
  }

  validate(): void {
    if (!this.name) {
      throw new InternalServerErrorException();
    }
  }
}
