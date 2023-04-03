import { Human } from "./Human";
import { AirplaneComponent } from "../Compound";

export class Stewardess extends Human implements AirplaneComponent {
  public stewardessID: string;

  constructor(name: string, stewardessID: string) {
    super(name);
    this.stewardessID = stewardessID;
  }

  public getLuggageSize(): number {
    return 0;
  }
  public setLuggageSize(): number {
    return 0;
  }
}
