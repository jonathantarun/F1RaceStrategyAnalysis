import { RaceScenario } from "../src/RaceScenario.js";

describe('RaceScenario Class', () => {
  test('should initialize with correct properties', () => {
    const scenario = new RaceScenario({
      trackConditions: "Dry",
      weather: "Sunny",
      tireDegradationRate: 0.2,
      fuelConsumptionRate: 1.0,
      lapCount: 60
    });
    expect(scenario.trackConditions).toBe("Dry");
    expect(scenario.weather).toBe("Sunny");
    expect(scenario.tireDegradationRate).toBe(0.2);
    expect(scenario.fuelConsumptionRate).toBe(1.0);
    expect(scenario.lapCount).toBe(60);
  });
});
