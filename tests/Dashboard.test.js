/**
 * @file Dashboard.test.js
 * @description Tests for the Dashboard class.
 */

import { Dashboard } from "../src/Dashboard.js";

describe("Dashboard Class", () => {
  let dashboard;

  beforeEach(() => {
    dashboard = new Dashboard();
  });

  test("should initialize with correct properties", () => {
    expect(dashboard.displayElements).toEqual([]);
    expect(dashboard.alertThresholds).toEqual({});
  });

  test("should add elements correctly", () => {
    dashboard.addElement("Lap Times");
    dashboard.addElement("Weather Updates");

    expect(dashboard.displayElements).toContain("Lap Times");
    expect(dashboard.displayElements).toContain("Weather Updates");
  });

  test("should set alert thresholds correctly", () => {
    dashboard.setAlertThreshold("tireDegradation", 0.7);
    
    expect(dashboard.alertThresholds.tireDegradation).toBe(0.7);
  });

  test("should render dashboard correctly", () => {
    dashboard.addElement("Lap Times");
    dashboard.addElement("Driver Performance");

    expect(dashboard.render()).toBe("Dashboard Elements: Lap Times, Driver Performance");
  });
});

