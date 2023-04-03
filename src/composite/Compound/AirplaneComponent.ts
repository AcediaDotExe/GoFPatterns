export interface AirplaneComponent {
  name: string;

  getLuggageSize(): number;
  setLuggageSize(luggageSize: number): void;
}
