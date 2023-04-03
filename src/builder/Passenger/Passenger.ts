export class Passenger {
  constructor(name: string) {
    this._name = name;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  public setLuggageSize(): number {
    return 0;
  }
}
