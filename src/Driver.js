/**
 * @file Driver.js
 * @description Represents a driver in the F1 Race Strategy Analysis System.
 */
export class Driver {
    /**
     * Creates a new Driver.
     * @param {string} name - The driver’s name.
     * @param {string} role - The driver’s role (e.g., "Race Leader").
     */
    constructor(name, role) {
      this.name = name;
      this.role = role;
      this._lapTimes = []; // Encapsulated property
      this._tireManagementScore = 0;
      this._fuelEfficiency = 0;
    }
  
    /**
     * Records a lap time.
     * @param {number} time
     */
    recordLap(time) {
      this._lapTimes.push(time);
    }
  
    /**
     * Gets the average lap time.
     * @returns {number}
     */
    getAverageLapTime() {
      if (this._lapTimes.length === 0) return 0;
      return this._lapTimes.reduce((a, b) => a + b, 0) / this._lapTimes.length;
    }
  
    /**
     * Updates the tire management score.
     * @param {number} score
     */
    updateTireManagement(score) {
      this._tireManagementScore = score;
    }
  
    /**
     * Gets the tire management score.
     * @returns {number}
     */
    getTireManagement() {
      return this._tireManagementScore;
    }
  }
  