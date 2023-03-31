import { Passenger } from "../Passenger";
import { Car } from "../Car";

export interface CarBuilder {
  addId(id: number): CarBuilder;

  addDriver(name: string): CarBuilder;

  addPassenger(passenger: Passenger): CarBuilder;

  addPassengers(): CarBuilder;

  addBabyChair(): CarBuilder;

  build(): Car | null;
}
