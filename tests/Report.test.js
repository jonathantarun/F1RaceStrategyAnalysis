import { Report } from "../src/Report.js";

describe('Report Class', () => {
  let report;

  beforeEach(() => {
    report = new Report(
      1,
      "Race Summary",
      "Detailed analysis of the race performance."
    );
  });

  test('should initialize with correct properties', () => {
    expect(report.reportId).toBe(1);
    expect(report.summary).toBe("Race Summary");
    expect(report.detailedAnalysis).toBe("Detailed analysis of the race performance.");
    expect(report.timestamp).toBeInstanceOf(Date);
  });
});
