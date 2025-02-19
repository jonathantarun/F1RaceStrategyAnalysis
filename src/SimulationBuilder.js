/**
 * @file SimulationBuilder.js
 * @description Builder for constructing Simulation objects.
 */
import { Simulation } from "./Simulation.js";

export class SimulationBuilder {
  constructor() {
    this.inputData = null;
    this.simulationParameters = { difficultyFactor: 1 };
  }

  /**
   * Sets the input data for the simulation.
   * @param {Object} inputData
   * @returns {SimulationBuilder}
   */
  setInputData(inputData) {
    this.inputData = inputData;
    return this;
  }

  /**
   * Sets additional simulation parameters.
   * @param {Object} params
   * @returns {SimulationBuilder}
   */
  setSimulationParameters(params) {
    this.simulationParameters = { ...this.simulationParameters, ...params };
    return this;
  }

  /**
   * Builds and returns the Simulation object.
   * @returns {Simulation}
   */
  build() {
    if (!this.inputData) {
      throw new Error("Input data is required for simulation.");
    }
    return new Simulation(this.inputData, this.simulationParameters);
  }
}
