import { AirplaneUnit } from "./Compound";
import { Passenger, Pilot, Stewardess } from "./Leafs";

(function main() {
  generateAirplane("KillMePls", 4000, 2, 6, 10, 20, 150);
})();

function generateAirplane(
  AirplaneName: string,
  maxAirplaneLuggageSize: number,
  maxPilots: number,
  maxStewards: number,
  maxFirstClassPassengers: number,
  maxBusinessClassPassengers: number,
  maxEconomyClassPassengers: number
) {
  const airplane = new AirplaneUnit(
    AirplaneName,
    maxAirplaneLuggageSize,
    Infinity,
    maxAirplaneLuggageSize
  );

  const pilots = new AirplaneUnit(
    "Pilots",
    maxAirplaneLuggageSize,
    maxPilots,
    0
  );

  for (let i = 0; i < maxPilots + 1; i++) {
    pilots.add(new Pilot("Aviator", String(i)));
  }

  const stewards = new AirplaneUnit(
    "Stewards",
    maxAirplaneLuggageSize,
    maxStewards,
    0
  );
  for (let i = 0; i < maxStewards + 1; i++) {
    stewards.add(new Stewardess("Stew", String(i)));
  }

  const firstClassPassengers = new AirplaneUnit(
    "FirstClass",
    maxAirplaneLuggageSize,
    maxFirstClassPassengers,
    maxAirplaneLuggageSize
  );
  for (let i = 0; i < maxFirstClassPassengers + 1; i++) {
    firstClassPassengers.add(new Passenger("Steak" + i, 60));
  }

  const businessClassPassengers = new AirplaneUnit(
    "BusinessClass",
    maxAirplaneLuggageSize,
    maxBusinessClassPassengers,
    35
  );
  for (let i = 0; i < maxBusinessClassPassengers + 1; i++) {
    businessClassPassengers.add(new Passenger("Goulash" + i, 17 + i));
  }

  const economyClassPassengers = new AirplaneUnit(
    "EconomyClass",
    maxAirplaneLuggageSize,
    maxEconomyClassPassengers,
    20,
    true
  );
  for (let i = 0; i < maxEconomyClassPassengers - 1; i++) {
    economyClassPassengers.add(new Passenger("Sausage" + i, 20));
  }
  economyClassPassengers.add(new Passenger("BigBOY", 30));

  airplane.add(pilots);
  airplane.add(stewards);
  airplane.add(firstClassPassengers);
  airplane.add(businessClassPassengers);
  airplane.add(economyClassPassengers);

  airplane.fixLuggageSize();
  return airplane;
}
