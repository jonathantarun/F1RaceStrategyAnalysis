/**
 * @file Race.js
 * @description Represents a race.
 */
import { RaceScenario } from "./RaceScenario.js";

export class Race {
  /**
   * Creates a new Race.
   * @param {string} track - The track name.
   * @param {number} laps - Total number of laps.
   * @param {RaceScenario} scenario - The race scenario.
   */
  constructor(track, laps, scenario) {
    this.track = track;
    this.laps = laps;
    this.scenario = scenario;
  }
}
