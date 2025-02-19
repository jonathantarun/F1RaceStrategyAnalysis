/**
 * @file config.js
 * @description Singleton configuration manager for the F1 Race Strategy Analysis System.
 */
export class Config {
    /** @type {Config} */
    static instance;
  
    /**
     * @private
     * Creates a configuration manager.
     */
    constructor() {
      if (Config.instance) {
        throw new Error("Use Config.getInstance()");
      }
      // Default configuration values
      this.config = {
        simulationSpeed: 1.0,
        alertThreshold: 0.8,
      };
    }
  
    /**
     * Returns the singleton instance of Config.
     * @returns {Config}
     */
    static getInstance() {
      if (!Config.instance) {
        Config.instance = new Config();
      }
      return Config.instance;
    }
  
    /**
     * Gets the current configuration.
     * @returns {Object}
     */
    getConfig() {
      return this.config;
    }
  
    /**
     * Updates the configuration.
     * @param {Object} newConfig
     */
    updateConfig(newConfig) {
      this.config = { ...this.config, ...newConfig };
    }
  }
  