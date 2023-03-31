import { Driver } from "../Driver";
import { Passenger } from "../Passenger";

export interface Car {
  id: number;
  driver: Driver | undefined;
  passengers: Array<Passenger>;
  isReady: boolean;

  addDriver(driver: Driver): void;

  addPassenger(passenger: Passenger): void;

  removeDriver(): void;

  removePassenger(passenger: Passenger): void;
}
