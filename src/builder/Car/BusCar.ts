import { Car } from "./Car";
import { Passenger } from "../Passenger";
import { BusDriver } from "../Driver";

export class BusCar implements Car {
  private _maxPassengers: number = 30;

  constructor(id: number, driver: BusDriver, passengers: Array<Passenger>) {
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

  private _driver: BusDriver | undefined;

  get driver(): BusDriver | undefined {
    return this._driver;
  }

  set driver(value: BusDriver | undefined) {
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

  addDriver(driver: BusDriver): void {
    if (!this._driver) {
      this._driver = driver;
    } else {
      console.log("Can't board driver " + driver.name);
    }
    this.checkIsReady();
  }

  addPassenger(passenger: Passenger): void {
    if (this.passengers.length < this._maxPassengers) {
      this.passengers.push(passenger);
    } else
      console.log(`Bus ${this._id} hasn't free places for ${passenger.name}`);
    this.checkIsReady();
  }

  removeDriver(): void {
    this._driver = undefined;
    this.checkIsReady();
  }

  removePassenger(passenger: Passenger): void {
    this.passengers = this.passengers.filter((p) => p.name !== passenger.name);
    this.checkIsReady();
  }

  private checkIsReady(): void {
    this._isReady =
      this._driver && this.passengers.length === this._maxPassengers
        ? true
        : false;
  }
}
