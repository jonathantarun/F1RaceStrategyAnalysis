/**
 * @file StrategyFactory.js
 * @description Factory for creating Strategy instances.
 */
import { Strategy } from "./Strategy.js";

export class StrategyFactory {
  /**
   * Creates a new Strategy based on a given type.
   * @param {string} type - The type of strategy (e.g., "aggressive", "conservative").
   * @returns {Strategy}
   */
  static createStrategy(type) {
    if (type === "aggressive") {
      return new Strategy([5, 15], "soft", 20, "High risk, high reward");
    } else if (type === "conservative") {
      return new Strategy([10, 20], "hard", 30, "Steady performance");
    } else {
      return new Strategy([8, 18], "medium", 25, "Balanced approach");
    }
  }
}
