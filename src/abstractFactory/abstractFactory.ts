interface Driver {
  name: string;
}

class BusDriver implements Driver {
  private _name: string;

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  constructor(name: string) {
    this._name = name;
  }
}

class TaxiDriver implements Driver {
  private _name: string;

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  constructor(name: string) {
    this._name = name;
  }
}

class Passenger {
  private _name: string;

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  constructor(name: string) {
    this._name = name;
  }
}

interface PersonFactory {
  createDriver(name: string): Driver;

  createPassenger(name: string): Passenger;
}

class TaxiPersonFactory implements PersonFactory {
  createDriver(name: string) {
    return new TaxiDriver(name);
  }

  createPassenger(name: string) {
    return new Passenger(name);
  }
}

class BusPersonFactory implements PersonFactory {
  createDriver(name: string) {
    return new BusDriver(name);
  }

  createPassenger(name: string) {
    return new Passenger(name);
  }
}

interface Car {
  id: number;
  driver: Driver | undefined;
  passengers: Array<Passenger>;
  isReady: boolean;
  addDriver(driver: Driver): void;

  addPassenger(passenger: Passenger): void;

  removeDriver(): void;

  removePassenger(passenger: Passenger): void;
}

class TaxiCar implements Car {
  get isReady(): boolean {
    return this._isReady;
  }

  set isReady(value: boolean) {
    this._isReady = value;
  }
  get passengers(): Array<Passenger> {
    return this._passengers;
  }

  set passengers(value: Array<Passenger>) {
    this._passengers = value;
  }
  get driver(): TaxiDriver | undefined {
    return this._driver;
  }

  set driver(value: TaxiDriver | undefined) {
    this._driver = value;
  }
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  private _id: number;
  private _driver: TaxiDriver | undefined;
  private _passengers: Array<Passenger> = [];
  private _isReady: boolean = false;

  constructor(id: number) {
    this.id = id;
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
    if (this._passengers.length < 4) {
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

  private checkIsReady(): void {
    this._isReady =
      this._driver && this._passengers.length === 4 ? true : false;
  }
}

class BusCar implements Car {
  get isReady(): boolean {
    return this._isReady;
  }

  set isReady(value: boolean) {
    this._isReady = value;
  }
  get passengers(): Array<Passenger> {
    return this._passengers;
  }

  set passengers(value: Array<Passenger>) {
    this._passengers = value;
  }
  get driver(): BusDriver | undefined {
    return this._driver;
  }

  set driver(value: BusDriver | undefined) {
    this._driver = value;
  }
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  private _id: number;
  private _driver: BusDriver | undefined;
  private _passengers: Array<Passenger> = [];
  private _isReady: boolean = false;

  constructor(id: number) {
    this._id = id;
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
    if (this.passengers.length < 30) {
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
      this._driver && this.passengers.length === 30 ? true : false;
  }
}

class TransportationAgency {
  buses: Array<BusCar> = [];
  taxes: Array<TaxiCar> = [];

  constructor(busesCount: number, taxesCount: number) {
    for (let i = 0; i < busesCount; i++) {
      this.buses.push(new BusCar(i));
    }
    for (let i = 0; i < taxesCount; i++) {
      this.taxes.push(new TaxiCar(i));
    }
  }

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

function main(): void {
  const moscowAgency = new TransportationAgency(2, 2);
  const busOperator = new BusPersonFactory();
  const taxiOperator = new TaxiPersonFactory();

  moscowAgency.taxes[0].addDriver(taxiOperator.createDriver("Vasya"));
  moscowAgency.taxes[1].addDriver(taxiOperator.createDriver("Kolya"));

  moscowAgency.buses[0].addDriver(busOperator.createDriver("Nastya"));
  moscowAgency.buses[0].addDriver(busOperator.createDriver("Zhenya"));

  for (let i = 0; i < 5; i++) {
    moscowAgency.taxes[0].addPassenger(taxiOperator.createPassenger(String(i)));
  }
  for (let i = 0; i < 32; i++) {
    moscowAgency.buses[0].addPassenger(busOperator.createPassenger(String(i)));
  }

  moscowAgency.info();
  let mda: TaxiCar = new TaxiCar(4);
}

main();

class Singleton {
  private singleDriver: Driver = new TaxiDriver("Solo");

  public getInstance(): Driver {
    return this.singleDriver;
  }
}

const singleton = new Singleton();
console.log(singleton.getInstance());
