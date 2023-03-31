import { CarBuilder } from "./CarBuilder";
import { TaxiDriver } from "../Driver";
import { AdultPassenger, ChildPassenger, Passenger } from "../Passenger";
import { Car, TaxiCar } from "../Car";

export class TaxiCarBuilder implements CarBuilder {
  private _maxPassengers: number = 4;
  private _id: number;
  private _passengers: Array<Passenger> = [];
  private _hasBabyChair: boolean = false;
  private _driver: TaxiDriver;

  addId(id: number): CarBuilder {
    this._id = id;
    return this;
  }

  addDriver(name: string): CarBuilder {
    this._driver = new TaxiDriver(name);
    return this;
  }

  addBabyChair(): CarBuilder {
    if (!this._hasBabyChair) {
      this._hasBabyChair = true;
    } else {
      console.log(`Taxi ${this._id} already has child chair`);
    }
    return this;
  }

  addPassenger(passenger: Passenger): CarBuilder {
    if (this._passengers.length <= this._maxPassengers) {
      switch (true) {
        case passenger instanceof AdultPassenger:
          this._passengers.push(passenger);
          break;
        case passenger instanceof ChildPassenger:
          if (this._hasBabyChair) {
            this._passengers.push(passenger);
          } else {
            console.log(`Taxi ${this._id} hasn't baby chair`);
          }
          break;
        default:
          console.log(`Taxi ${this._id} can't board passenger: ${passenger}`);
      }
    } else {
      console.log(`Taxi ${this._id} is full`);
    }
    return this;
  }

  addPassengers(): CarBuilder {
    for (let i = 0; i < this._maxPassengers / 2; i++) {
      this.addPassenger(new AdultPassenger("Adult" + i));
      this.addPassenger(new ChildPassenger("Child" + i));
    }
    return this;
  }

  build(): Car {
    const car = new TaxiCar(this._id, this._driver, this._passengers);
    this.resetAll();
    return car;
  }

  private resetAll(): void {
    this._id = undefined;
    this._driver = undefined;
    this._passengers = [];
    this._hasBabyChair = false;
  }
}
