import { Human } from "./Human";
import { AirplaneComponent } from "../Compound";

export class Stewardess extends Human implements AirplaneComponent {
  public stewardessID: string;

  constructor(name: string, stewardessID: string) {
    super(name);
    this.stewardessID = stewardessID;
  }
}
