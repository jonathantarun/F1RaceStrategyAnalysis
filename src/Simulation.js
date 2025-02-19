/**
 * @file Simulation.js
 * @description Represents a simulation module for race scenarios.
 */

/**
 * Abstract class representing a simulation module.
 * @abstract
 */
class SimulationModule {
    constructor() {
      if (new.target === SimulationModule) {
        throw new TypeError("Cannot construct SimulationModule instances directly");
      }
    }
  
    /**
     * Runs the simulation.
     * @abstract
     * @returns {Object}
     */
    run() {
      throw new Error("Method 'run()' must be implemented.");
    }
  }
  
  /**
   * Concrete Simulation class that simulates race scenarios.
   * Demonstrates:
   * - Abstraction (by extending the abstract SimulationModule)
   * - Inheritance (Simulation inherits from SimulationModule)
   * - Polymorphism (Simulation implements its own run() method)
   */
  export class Simulation extends SimulationModule {
    /**
     * Creates a new Simulation.
     * @param {Object} inputData - The input data (e.g., scenario and team).
     * @param {Object} simulationParameters - Parameters controlling the simulation.
     */
    constructor(inputData, simulationParameters) {
      super();
      this.inputData = inputData;
      this.simulationParameters = simulationParameters;
      this.simulationResults = null;
    }
  
    /**
     * Runs the simulation.
     * @returns {Object} The simulation results.
     */
    run() {
      // A simple simulation calculation:
      this.simulationResults = {
        performanceScore: (Math.random() * (0.85 - 0.70) + 0.70) * 100 * this.simulationParameters.difficultyFactor, // 85 seconds being the max lap time and 70 being the lowest
        message: "Simulation completed successfully."
      };
      return this.simulationResults;
    }
  }
  