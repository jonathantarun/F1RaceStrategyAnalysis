/**
 * @file Team.test.js
 * @description Tests for the Team class.
 */

import { Team } from "../src/Team.js";
import { Driver } from "../src/Driver.js";

describe("Team Class", () => {
  let team;

  beforeEach(() => {
    team = new Team("Red Bull Racing");
  });

  test("should initialize with correct properties", () => {
    expect(team.teamName).toBe("Red Bull Racing");
    expect(team.drivers).toEqual([]);
    expect(team.strategyList).toEqual([]);
  });

  test("should add drivers correctly", () => {
    const driver = new Driver("Max Verstappen", "Lead Driver");
    team.addDriver(driver);
    expect(team.drivers).toContain(driver);
  });

  test("should add strategies correctly", () => {
    const strategy = { type: "Aggressive", description: "Two-stop strategy" };
    team.addStrategy(strategy);
    expect(team.strategyList).toContain(strategy);
  });
});
