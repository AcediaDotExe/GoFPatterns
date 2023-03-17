import {BusCar, TaxiCar} from "../Car";

export class TransportationAgency {
    buses: Array<BusCar> = [];
    taxes: Array<TaxiCar> = [];

    info(): void {
        this.buses.forEach((bus) => {
            console.log(`Bus number ${bus.id}`);
            console.log(`\t Driver: ${bus.driver ? bus.driver.name : "no driver"}`);
            console.log(`\t Count of people: ${bus.passengers.length}`);
            console.log(`\t Is ready: ${bus.isReady}`);
        });
        this.taxes.forEach((taxi) => {
            console.log(`Taxi number ${taxi.id}`);
            console.log(`\t Driver: ${taxi.driver ? taxi.driver.name : "no driver"}`);
            console.log(`\t Count of people: ${taxi.passengers.length}`);
            console.log(`\t Is ready: ${taxi.isReady}`);
        });
    }
}
