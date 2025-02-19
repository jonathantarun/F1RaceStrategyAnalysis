/**
 * @file Report.js
 * @description Represents a race report.
 */
export class Report {
    /**
     * Creates a new Report.
     * @param {number} reportId
     * @param {string} summary
     * @param {string} detailedAnalysis
     * @param {Date} [timestamp=new Date()]
     */
    constructor(reportId, summary, detailedAnalysis, timestamp = new Date()) {
      this.reportId = reportId;
      this.summary = summary;
      this.detailedAnalysis = detailedAnalysis;
      this.timestamp = timestamp;
    }
  }
  