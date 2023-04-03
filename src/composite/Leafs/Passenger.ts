import { Human } from "./Human";
import { AirplaneComponent } from "../Compound";

export class Passenger extends Human implements AirplaneComponent {
  private _luggageSize: number;

  constructor(name: string, luggageSize: number) {
    super(name);
    this.setLuggageSize(luggageSize);
  }

  public getLuggageSize(): number {
    return this._luggageSize;
  }

  public setLuggageSize(luggageSize: number): void {
    if (luggageSize >= 0 && luggageSize <= 60) this._luggageSize = luggageSize;
    else
      console.log(
        `Incorrect size for ${this.name} passenger: ${luggageSize} kg`
      );
  }
}
