import { AirplaneComponent } from "./AirplaneComponent";
import { Passenger } from "../Leafs";

export class AirplaneUnit implements AirplaneComponent {
  public name: string;
  public maxAirplaneLuggageSize: number;
  public canRemoveLuggage: boolean = false;

  public maxSubUnitsAmount: number;
  public maxSubUnitsLuggageSize: number;

  public subUnits: Array<AirplaneComponent> = new Array<AirplaneComponent>();

  constructor(
    name: string,
    maxAirplaneLuggageSize: number,
    maxSubUnitsAmount: number,
    maxSubUnitsLuggageSize: number,
    canRemoveLuggage?: boolean
  ) {
    this.name = name;
    this.maxAirplaneLuggageSize = maxAirplaneLuggageSize;
    this.maxSubUnitsAmount = maxSubUnitsAmount;
    this.maxSubUnitsLuggageSize = maxSubUnitsLuggageSize;
    if (canRemoveLuggage) {
      this.canRemoveLuggage = canRemoveLuggage;
    }
  }

  public add(unit: AirplaneComponent) {
    if (this.subUnits.length < this.maxSubUnitsAmount) {
      if (unit instanceof Passenger) this.pushPassenger(unit);
      else this.subUnits.push(unit);
    } else {
      console.log(`Unit ${this.name} hasn't free places for ${unit.name}`);
    }
  }

  private pushPassenger(unit: Passenger): void {
    if (unit.luggageSize <= this.maxSubUnitsLuggageSize) {
      this.subUnits.push(unit);
    } else {
      console.log(`Passenger ${unit.name} with ${unit.luggageSize} kg exceeded the max luggage size
             for unit ${this.name} with max ${this.maxSubUnitsLuggageSize} kg `);
    }
  }

  public remove(unit: AirplaneComponent) {
    let index = this.subUnits.indexOf(unit);
    if (index !== -1) {
      this.subUnits.splice(index, 1);
    } else {
      console.log(`Unit ${this.name} hasn't subunit ${unit.name}`);
    }
  }

  public getLuggageSize(): number {
    let size: number = 0;
    for (const unit of this.subUnits) {
      if (unit instanceof AirplaneUnit) {
        size += unit.getLuggageSize();
      }
      if (unit instanceof Passenger) {
        size += unit.luggageSize;
      }
    }
    return size;
  }

  public fixLuggageSize() {
    while (!this.isLuggageSizeAllowed()){
      this.decreaseLuggageSize();
    }
  }

  private isLuggageSizeAllowed(): boolean {
    return this.getLuggageSize() <= this.maxAirplaneLuggageSize;
  }

  private decreaseLuggageSize(): void {
    for (const subUnit of this.subUnits) {
      if (subUnit instanceof AirplaneUnit && subUnit.canRemoveLuggage) {
        this.removePassengerLuggage(subUnit);
      }
    }
  }

  private removePassengerLuggage(unit: AirplaneUnit): void {
      for (const subUnit of unit.subUnits) {
        if (subUnit instanceof Passenger) {
          if (subUnit.luggageSize !== 0) {
            subUnit.luggageSize = 0;
            console.log(`Passenger ${subUnit.name} luggage removed.`);
            break;
          }
        }
      }
  }
}
