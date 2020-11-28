import { StringValueObject } from '../../shared/domain/value-object/string.valueobject';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class UserName extends StringValueObject {

  constructor(
    private readonly value: string
  ) {
    super(value);
    this.ensureHasAtLeast4Characters(value);
  }

  private ensureHasAtLeast4Characters(value: string): void {
    if (value.length < 4 ) {
      throw new Error('The name should have more than 4 characters');
    }
  }
}
