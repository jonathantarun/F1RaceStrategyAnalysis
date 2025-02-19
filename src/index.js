/**
 * @file index.js
 * @description Main entry point for the F1 Race Strategy Analysis System.
 *              This file demonstrates the usage of various classes including Config,
 *              Driver, Team, RaceScenario, Race, Dashboard, Report, and Simulation.
 *              It displays the race report, driver lap times, race scenario, dashboard, 
 *              and simulation results in the terminal.
 */

import { Config } from "./config.js";
import { StrategyFactory } from "./StrategyFactory.js";
import { Driver } from "./Driver.js";
import { Team } from "./Team.js";
import { RaceScenario } from "./RaceScenario.js";
import { Race } from "./Race.js";
import { Dashboard } from "./Dashboard.js";
import { Report } from "./Report.js";
import { SimulationBuilder } from "./SimulationBuilder.js";

/**
 * Main function to run the application.
 */
function main() {
  // --- Using the Config Singleton ---
  /** @type {Config} */
  const config = Config.getInstance();
  console.log("=== Current Config ===");
  console.log(config.getConfig());
  console.log("");

  // --- Creating Drivers and Recording Lap Times ---
  /** @type {Driver} */
  const driver1 = new Driver("Lewis Hamilton", "Race Leader");
  driver1.recordLap(85.5);
  driver1.recordLap(84.2);

  /** @type {Driver} */
  const driver2 = new Driver("Max Verstappen", "Race Contender");
  driver2.recordLap(86.1);
  driver2.recordLap(85.3);

  // For demonstration purposes, add helper methods to access encapsulated lap times.
  /**
   * @returns {number[]}
   */
  driver1.getLapTimes = function() {
    return this._lapTimes;
  };
  /**
   * @returns {number[]}
   */
  driver2.getLapTimes = function() {
    return this._lapTimes;
  };

  // --- Creating a Team and Adding Drivers & Strategies ---
  /** @type {Team} */
  const team = new Team("Mercedes-AMG");
  team.addDriver(driver1);
  team.addDriver(driver2);
  const aggressiveStrategy = StrategyFactory.createStrategy("aggressive");
  team.addStrategy(aggressiveStrategy);

  // --- Creating a Race Scenario (Weather & Track Conditions) ---
  /** @type {RaceScenario} */
  const raceScenario = new RaceScenario({
    trackConditions: "Wet",
    weather: "Rainy",
    tireDegradationRate: 0.3,
    fuelConsumptionRate: 1.2,
    lapCount: 50
  });

  // --- Creating a Race Instance ---
  /** @type {Race} */
  const race = new Race("Silverstone", 50, raceScenario);

  // --- Creating a Race Report ---
  /** @type {Report} */
  const report = new Report(
    1,
    "Race Summary",
    "Detailed analysis of the race including driver performance and weather conditions."
  );

  // --- Displaying the Report ---
  console.log("=== Race Report ===");
  console.log(`Report ID: ${report.reportId}`);
  console.log(`Summary: ${report.summary}`);
  console.log(`Detailed Analysis: ${report.detailedAnalysis}`);
  console.log(`Timestamp: ${report.timestamp}`);
  console.log("");

  // --- Displaying Race Scenario Details ---
  console.log("=== Race Scenario ===");
  console.log(`Track Conditions: ${raceScenario.trackConditions}`);
  console.log(`Weather: ${raceScenario.weather}`);
  console.log(`Tire Degradation Rate: ${raceScenario.tireDegradationRate}`);
  console.log(`Fuel Consumption Rate: ${raceScenario.fuelConsumptionRate}`);
  console.log(`Total Laps: ${raceScenario.lapCount}`);
  console.log("");

  // --- Displaying Driver Lap Times ---
  console.log("=== Driver Lap Times ===");
  [driver1, driver2].forEach((driver) => {
    console.log(`Driver: ${driver.name} (${driver.role})`);
    console.log(`Lap Times: ${driver.getLapTimes().join(", ")} seconds`);
    console.log("");
  });

  // --- Displaying the Dashboard ---
  /** @type {Dashboard} */
  const dashboard = new Dashboard();
  dashboard.addElement("Lap Times");
  dashboard.addElement("Driver Performance");
  dashboard.addElement("Weather Updates");
  dashboard.setAlertThreshold("tireDegradation", 0.6);
  console.log("=== Dashboard ===");
  console.log(dashboard.render());
  console.log("");

  // --- (Optional) Running a Simulation ---
  const simulation = new SimulationBuilder()
    .setInputData({ scenario: raceScenario, team })
    .setSimulationParameters({ difficultyFactor: 1.5 })
    .build();

  const simulationResults = simulation.run();
  console.log("=== Simulation Results ===");
  console.log(simulationResults);
}

// Execute the main function to run the application.
main();
