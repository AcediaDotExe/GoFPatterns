import { AirplaneComponent } from "../Compound";

export class Human implements AirplaneComponent {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
