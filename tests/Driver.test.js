import { Driver } from "../src/Driver.js";

describe("Driver Class", () => {
  let driver;

  beforeEach(() => {
    driver = new Driver("Test Driver", "Test Role");
  });

  test("should record lap times correctly", () => {
    driver.recordLap(90);
    driver.recordLap(85);
    // Expose lap times for testing
    driver.getLapTimes = function() {
      return this._lapTimes;
    };
    expect(driver.getLapTimes()).toEqual([90, 85]);
  });

  test("should calculate average lap time correctly", () => {
    driver.recordLap(90);
    driver.recordLap(80);
    const avg = driver.getAverageLapTime();
    expect(avg).toBeCloseTo(85, 1);
  });
});
