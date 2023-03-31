import { Human } from "./Human";
import { AirplaneComponent } from "../Compound";

export class Passenger extends Human implements AirplaneComponent {
  private _luggageSize: number;

  constructor(name: string, luggageSize: number) {
    super(name);
    this.luggageSize = luggageSize;
  }

  get luggageSize(): number {
    return this._luggageSize;
  }

  set luggageSize(value: number) {
    if (value >= 0 && value <= 60) this._luggageSize = value;
    else console.log(`Incorrect size for ${this.name} passenger: ${value} kg`);
  }
}
