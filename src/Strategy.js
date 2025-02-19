/**
 * @file Strategy.js
 * @description Represents a race strategy.
 */
export class Strategy {
    /**
     * Creates a new Strategy.
     * @param {number[]} pitStopTimings - Array of lap numbers for pit stops.
     * @param {string} tireCompoundPlan - The tire plan (e.g., soft, hard).
     * @param {number} fuelLoadConfiguration - The fuel load value.
     * @param {string} expectedOutcome - A summary of the expected result.
     */
    constructor(pitStopTimings, tireCompoundPlan, fuelLoadConfiguration, expectedOutcome) {
      this.pitStopTimings = pitStopTimings;
      this.tireCompoundPlan = tireCompoundPlan;
      this.fuelLoadConfiguration = fuelLoadConfiguration;
      this.expectedOutcome = expectedOutcome;
    }
  
    /**
     * Executes the strategy.
     * @returns {string}
     */
    execute() {
      return `Executing strategy with pit stops at ${this.pitStopTimings.join(", ")}`;
    }
  }
  