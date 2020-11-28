export class StringValueObject {

  constructor(
    private readonly value: string
  ) {
    this.ensureNotIsNull(value);
    this.ensureIsString(value);
  }

  private ensureIsString(value:string): void {
    if (typeof value !== 'string') {
      throw new Error('The type of name should be string');
    }
  }

  private ensureNotIsNull(value: string): void {
    if (!value) {
      throw new Error('The name can not should null');
    }
  }
}
