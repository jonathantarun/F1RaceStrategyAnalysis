/**
 * @file RaceScenario.js
 * @description Represents a race scenario with various parameters.
 */
export class RaceScenario {
    /**
     * Creates a new RaceScenario.
     * @param {Object} params
     * @param {string} params.trackConditions
     * @param {string} params.weather
     * @param {number} params.tireDegradationRate
     * @param {number} params.fuelConsumptionRate
     * @param {number} params.lapCount
     */
    constructor({ trackConditions, weather, tireDegradationRate, fuelConsumptionRate, lapCount }) {
      this.trackConditions = trackConditions;
      this.weather = weather;
      this.tireDegradationRate = tireDegradationRate; //
      this.fuelConsumptionRate = fuelConsumptionRate;
      this.lapCount = lapCount;
    }
  }
  