import { BusCar, TaxiCar } from "./Car";
import { BusCarBuilder, Director, TaxiCarBuilder } from "./Builders";
import { TransportationAgency } from "./TransportationAgency/TransportationAgency";

function main(): void {
  const moscowAgency = new TransportationAgency();

  const director = new Director(new TaxiCarBuilder());

  moscowAgency.taxes.push(director.createCar(1, "Gocha") as TaxiCar);
  moscowAgency.taxes.push(director.createCar(2, "Tsaregradtsev") as TaxiCar);

  director.builder = new BusCarBuilder();

  moscowAgency.buses.push(director.createCar(3, "Dominic") as BusCar);
  moscowAgency.buses.push(director.createCar(4, "Brian") as BusCar);

  moscowAgency.info();
}

main();
