import { Human } from "./Human";
import { AirplaneComponent } from "../Compound";

export class Pilot extends Human implements AirplaneComponent {
  public pilotPassID: string;

  constructor(name: string, pilotPassID: string) {
    super(name);
    this.pilotPassID = pilotPassID;
  }

  public getLuggageSize(): number {
    return 0;
  }

  public setLuggageSize(): number {
    return 0;
  }
}
