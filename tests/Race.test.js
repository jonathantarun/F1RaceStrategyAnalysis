/**
 * @file Race.test.js
 * @description Tests for the Race class.
 */

import { Race } from "../src/Race.js";
import { RaceScenario } from "../src/RaceScenario.js";

describe("Race Class", () => {
  let raceScenario, race;

  beforeEach(() => {
    raceScenario = new RaceScenario({
      trackConditions: "Dry",
      weather: "Sunny",
      tireDegradationRate: 0.2,
      fuelConsumptionRate: 1.0,
      lapCount: 50
    });

    race = new Race("Silverstone", 50, raceScenario);
  });

  test("should initialize with correct properties", () => {
    expect(race.track).toBe("Silverstone");
    expect(race.laps).toBe(50);
    expect(race.scenario).toBe(raceScenario);
  });

  test("should have a valid RaceScenario instance", () => {
    expect(race.scenario).toBeInstanceOf(RaceScenario);
    expect(race.scenario.trackConditions).toBe("Dry");
    expect(race.scenario.weather).toBe("Sunny");
  });
});
