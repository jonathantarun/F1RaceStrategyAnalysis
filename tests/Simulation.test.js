import { SimulationBuilder } from "../src/SimulationBuilder.js";
import { RaceScenario } from "../src/RaceScenario.js";
import { Team } from "../src/Team.js";
import { Driver } from "../src/Driver.js";

describe('Simulation', () => {
  test('should build and run simulation', () => {
    const scenario = new RaceScenario({
      trackConditions: "Mixed",
      weather: "Cloudy",
      tireDegradationRate: 0.3,
      fuelConsumptionRate: 1.1,
      lapCount: 50
    });
    const team = new Team("Test Team");
    const driver = new Driver("Test Driver", "Test Role");
    team.addDriver(driver);

    const simulation = new SimulationBuilder()
      .setInputData({ scenario, team })
      .setSimulationParameters({ difficultyFactor: 1 })
      .build();

    const results = simulation.run();
    expect(results).toHaveProperty('performanceScore');
    expect(results).toHaveProperty('message', 'Simulation completed successfully.');
  });
});
