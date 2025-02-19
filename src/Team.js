/**
 * @file Team.js
 * @description Represents a team consisting of multiple drivers.
 */
export class Team {
    /**
     * Creates a new Team.
     * @param {string} teamName - The team name.
     */
    constructor(teamName) {
      this.teamName = teamName;
      /** @type {Driver[]} */
      this.drivers = [];
      /** @type {Strategy[]} */
      this.strategyList = [];
    }
  
    /**
     * Adds a driver to the team.
     * @param {Driver} driver
     */
    addDriver(driver) {
      this.drivers.push(driver);
    }
  
    /**
     * Adds a strategy to the team.
     * @param {Strategy} strategy
     */
    addStrategy(strategy) {
      this.strategyList.push(strategy);
    }
  }
  