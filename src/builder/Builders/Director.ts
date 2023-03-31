import { Car } from "../Car";
import { CarBuilder } from "./CarBuilder";

export class Director {
  constructor(builder: CarBuilder) {
    this._builder = builder;
  }

  private _builder: CarBuilder;

  get builder(): CarBuilder {
    return this._builder;
  }

  set builder(value: CarBuilder) {
    this._builder = value;
  }

  public createCar(id: number, driverName: string): Car | null {
    const car: Car | null = this.builder
      .addId(id)
      .addDriver(driverName)
      .addBabyChair()
      .addPassengers()
      .build();
    if (car.isReady) {
      return car;
    }
    return null;
  }
}
