import { Driver } from "./Driver";

export class TaxiDriver implements Driver {
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
}
