export class StringValueObject {

  constructor(
    protected value: string
  ) { }

  getValue(): string {
    return this.value;
  }
}
