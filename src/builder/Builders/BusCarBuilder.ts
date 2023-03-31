import { CarBuilder } from "./CarBuilder";
import { BusDriver } from "../Driver";
import {
  AdultPassenger,
  ChildPassenger,
  Passenger,
  PreferentialPassenger,
} from "../Passenger";
import { BusCar, Car } from "../Car";

export class BusCarBuilder implements CarBuilder {
  private _maxPassengers: number = 30;
  private _id: number;
  private _driver: BusDriver | undefined;
  private _passengers: Array<Passenger> = [];

  addId(id: number): CarBuilder {
    if (!this._id) {
      this._id = id;
    }
    return this;
  }

  addDriver(name: string): CarBuilder {
    this._driver = new BusDriver(name);
    return this;
  }

  addBabyChair(): CarBuilder {
    return this;
  }

  addPassenger(passenger: Passenger): CarBuilder {
    if (this._passengers.length <= this._maxPassengers) {
      switch (true) {
        case passenger instanceof AdultPassenger:
          this._passengers.push(passenger);
          break;
        case passenger instanceof ChildPassenger:
          this._passengers.push(passenger);
          break;
        case passenger instanceof PreferentialPassenger:
          this._passengers.push(passenger);
          break;
        default:
          console.log(`Bus ${this._id} can't board passenger: ${passenger}`);
      }
    } else {
      console.log(`Bus ${this._id} is full`);
    }
    return this;
  }

  addPassengers(): CarBuilder {
    for (let i = 0; i < this._maxPassengers / 3; i++) {
      this.addPassenger(new AdultPassenger("Adult" + i));
      this.addPassenger(new ChildPassenger("Child" + i));
      this.addPassenger(new PreferentialPassenger("Preferential" + i));
    }
    return this;
  }

  build(): Car | null {
    const car = new BusCar(this._id, this._driver, this._passengers);
    this.resetAll();
    return car;
  }

  private resetAll(): void {
    this._id = undefined;
    this._driver = undefined;
    this._passengers = [];
  }
}
