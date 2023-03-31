import { Car } from "./Car";
import { Passenger } from "../Passenger";
import { TaxiDriver } from "../Driver";

export class TaxiCar implements Car {
  private _maxPassengers: number = 4;

  constructor(id: number, driver: TaxiDriver, passengers: Array<Passenger>) {
    this._id = id;
    this._driver = driver;
    this._passengers = passengers;

    this.checkIsReady();
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _driver: TaxiDriver | undefined;

  get driver(): TaxiDriver | undefined {
    return this._driver;
  }

  set driver(value: TaxiDriver | undefined) {
    this._driver = value;
  }

  private _passengers: Array<Passenger> = [];

  get passengers(): Array<Passenger> {
    return this._passengers;
  }

  set passengers(value: Array<Passenger>) {
    this._passengers = value;
  }

  private _isReady: boolean = false;

  get isReady(): boolean {
    return this._isReady;
  }

  set isReady(value: boolean) {
    this._isReady = value;
  }

  addDriver(driver: TaxiDriver): void {
    if (!this._driver) {
      this._driver = driver;
    } else {
      console.log("Can't board driver " + driver.name);
    }
    this.checkIsReady();
  }

  addPassenger(passenger: Passenger): void {
    if (this._passengers.length < this._maxPassengers) {
      this._passengers.push(passenger);
    } else
      console.log(`Taxi ${this._id} hasn't free places for ${passenger.name}`);
    this.checkIsReady();
  }

  removeDriver(): void {
    this._driver = undefined;
    this.checkIsReady();
  }

  removePassenger(passenger: Passenger): void {
    this._passengers = this._passengers.filter(
      (p) => p.name !== passenger.name
    );
    this.checkIsReady();
  }

  private checkIsReady(): boolean {
    this._isReady =
      this._driver && this._passengers.length === this._maxPassengers
        ? true
        : false;
    return this._isReady;
  }
}
