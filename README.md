# F1 Race Strategy Analysis System
This project is a comprehensive simulation tool designed to model and analyze Formula 1 race strategies. By incorporating key factors such as fuel consumption, tire degradation, weather conditions, and track-specific variables, the simulator enables users to evaluate and optimize race strategies for enhanced performance. It is an OOP project made using javascript to demonstrate the pillars of OOP, the SOLID principles and some design patterns

# Documents
Both my PDFs are under the `docs` folder in this repository. The document for **PART 1** submission is titled "Copy of ... February 12 4_06 PM". It was commited to the repo later since I initially only submitted a [google documents link](https://docs.google.com/document/d/1RySnku7G4bJ0ClbTuEJXEN3ShS6fuz_ylI29c6DctEA/edit?usp=sharing). 

# Instructions to run

- Clone the repository
- Run ```npm install``` at the project directory to install all dependencies
- Run ```npm test``` to run the tests
- Run ```node src/index.js``` to view the output

# Youtube Video
[Click here](https://youtu.be/5_8oImNPyjs) to check out my youtube video explaining all the OOP principles used in this project and demo the application.

# UML Class Diagram
[Click here](https://lucid.app/lucidchart/0098028a-437b-4d7a-b812-0b24aa18a7e5/edit?viewport_loc=-302%2C-255%2C3953%2C2085%2C0_0&invitationId=inv_48b804cc-b6ab-4f7d-809e-d7968178b6af) to view the UML class diagram I made for this system.

# Figma Interface Mockups
[Click here](https://www.figma.com/design/vCt2BA2RAiYc1uSZkK18B7/F1-Race-Strategy-Analysis?node-id=0-1&t=n3rst7Gm8K5sqlga-1) to check out the low fidelity interface mockups I made using figma.

# AI Usage

- **1.Tests:** all of the test files for this project were created using AI.
- **Model:** ChatGPT - o3 mini
- **Prompt:** (my class file , eg: Driver.js) Can you write some tests for this js class
- **Response:**

  ```js
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
  
  ```
  Similarly all the other test files were created using the exact same model and prompt.

  - **2.JSDoc:** All of the JSDocumentation in this project was done by AI.
  - **Model:** ChatGPT - o3 mini
  - **Prompt:** (class file code) can you document this code using JSDoc
  - **Response:**
    ```js
      import { Driver }  from "../src/Driver.js";

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
    ```
- **3.User Stories:** I used AI to get a sample user story and then made 2 more of my own using the generated one as an example.
- **Model:** ChatGPT - o3 mini
- **Prompt:**
(Problem description / Description of my application)
Persona 1: Team Strategist (Bonno)
Background: Bonno has strong data analysis skills and focuses on optimizing race strategy to maximize team performance.

Can you give me a sample user story for this persona using my application

- **Response:** As a Team Strategist, I want to compare multiple pit stop and tire strategies side-by-side so I can determine the most advantageous plan.




# OOP Principles, SOLID Principles, and Design Patterns in F1 Race Strategy Analysis System

## OOP Principles

### 1. Abstraction
**Example:**
```js
/**
 * @file Simulation.js
 * @description Represents a simulation module for race scenarios.
 */

/**
 * Abstract class representing a simulation module.
 * @abstract
 */
class SimulationModule {
    constructor() {
      if (new.target === SimulationModule) {
        throw new TypeError("Cannot construct SimulationModule instances directly");
      }
    }
  
    /**
     * Runs the simulation.
     * @abstract
     * @returns {Object}
     */
    run() {
      throw new Error("Method 'run()' must be implemented.");
    }
  }
```
**Why this is a good example:**
- Defines a generic interface for all simulations.
- Forces subclasses to implement the `run()` method.

**What would break it?**
- If `SimulationModule` were instantiated directly, it would break the abstraction.
- If we skipped abstraction and allowed multiple disparate simulation implementations without a common interface, it would be harder to manage or replace simulation logic across the application.



### 2. Encapsulation
**Example:**
```js
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
```
**Why this is a good example:**
- Internal `_lapTimes` is protected from direct modification.
- Controlled access through methods like `recordLap()` and `getAverageLapTime()`.

**What would break it?**
- Making `_lapTimes` public would allow external modification, leading to unwanted modifications.

### 3. Inheritance
**Example:**
```js
/**
 * @file Simulation.js
 * @description Represents a simulation module for race scenarios.
 */

/**
 * Abstract class representing a simulation module.
 * @abstract
 */
class SimulationModule {
    constructor() {
      if (new.target === SimulationModule) {
        throw new TypeError("Cannot construct SimulationModule instances directly");
      }
    }
  
    /**
     * Runs the simulation.
     * @abstract
     * @returns {Object}
     */
    run() {
      throw new Error("Method 'run()' must be implemented.");
    }
  }
  
  /**
   * Concrete Simulation class that simulates race scenarios.
   * Demonstrates:
   * - Abstraction (by extending the abstract SimulationModule)
   * - Inheritance (Simulation inherits from SimulationModule)
   * - Polymorphism (Simulation implements its own run() method)
   */
  export class Simulation extends SimulationModule {
    /**
     * Creates a new Simulation.
     * @param {Object} inputData - The input data (e.g., scenario and team).
     * @param {Object} simulationParameters - Parameters controlling the simulation.
     */
    constructor(inputData, simulationParameters) {
      super();
      this.inputData = inputData;
      this.simulationParameters = simulationParameters;
      this.simulationResults = null;
    }
  
    /**
     * Runs the simulation.
     * @returns {Object} The simulation results.
     */
    run() {
      // A simple simulation calculation:
      this.simulationResults = {
        performanceScore: (Math.random() * (0.85 - 0.70) + 0.70) * 100 * this.simulationParameters.difficultyFactor, // 85 seconds being the max lap time and 70 being the lowest
        message: "Simulation completed successfully."
      };
      return this.simulationResults;
    }
  }
  
```
**Why this is a good example:**
- `Simulation` extends `SimulationModule`, reusing the structure.
- The `run()` method is implemented as required by the parent class.
- By calling super() in its constructor, Simulation leverages the initialization logic (and any future common functionality) from SimulationModule, which reduces code duplication.

**What would break it?**
- If `Simulation` did not implement `run()`, the program would throw an error when attempting to use it.




### 4. Polymorphism
**Example:**
```js
/**
 * @file Simulation.js
 * @description Represents a simulation module for race scenarios.
 */

/**
 * Abstract class representing a simulation module.
 * @abstract
 */
class SimulationModule {
    constructor() {
      if (new.target === SimulationModule) {
        throw new TypeError("Cannot construct SimulationModule instances directly");
      }
    }
  
    /**
     * Runs the simulation.
     * @abstract
     * @returns {Object}
     */
    run() {
      throw new Error("Method 'run()' must be implemented.");
    }
  }
  
  /**
   * Concrete Simulation class that simulates race scenarios.
   * Demonstrates:
   * - Abstraction (by extending the abstract SimulationModule)
   * - Inheritance (Simulation inherits from SimulationModule)
   * - Polymorphism (Simulation implements its own run() method)
   */
  export class Simulation extends SimulationModule {
    /**
     * Creates a new Simulation.
     * @param {Object} inputData - The input data (e.g., scenario and team).
     * @param {Object} simulationParameters - Parameters controlling the simulation.
     */
    constructor(inputData, simulationParameters) {
      super();
      this.inputData = inputData;
      this.simulationParameters = simulationParameters;
      this.simulationResults = null;
    }
  
    /**
     * Runs the simulation.
     * @returns {Object} The simulation results.
     */
    run() {
      // A simple simulation calculation:
      this.simulationResults = {
        performanceScore: (Math.random() * (0.85 - 0.70) + 0.70) * 100 * this.simulationParameters.difficultyFactor, // 85 seconds being the max lap time and 70 being the lowest
        message: "Simulation completed successfully."
      };
      return this.simulationResults;
    }
  }
```
**Why this is a good example:**
- Any subclass of `SimulationModule` can be used without modifying `executeSimulation()`.
- The structure allows for new subclasses with different implementations of `run()` to be added without changing existing code, demonstrating polymorphism.

**What would break it?**
- If `executeSimulation()` were designed to only accept `Simulation` objects explicitly, it would not work with future subclasses.

---

## SOLID Principles

### 1. Single Responsibility Principle
**Example:**
```js
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
```
- `Team` class **only** manages drivers.
- Avoids handling simulation logic or UI, keeping responsibilities separate.

**What would break it?**
- Breaking the Single Responsibility Principle (SRP) in the Team class would occur if you start adding responsibilities that are not directly related to managing team data.
- For example - adding part of the simulation class' logic would not follow this principle.

### 2. Open/Closed Principle
**Example:**
```js
/**
 * Factory class to create different strategy objects.
 * Extensible without modifying existing code.
 */
export class StrategyFactory {
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

```
- New strategies can be added **without modifying existing code**.
- It is a good example of open/closed principle since it is open for extension (can add additional strategies) but closed for modification (cannot modify the strategy code).

**What would break it?**
- If the strategy creation logic were spread across multiple classes, adding a new strategy type would necessitate changes in many parts of the code, increasing the risk of errors.

### 3. Liskov Substitution Principle
**Example:**
```js
/**
 * @file Simulation.js
 * @description Represents a simulation module for race scenarios.
 */

/**
 * Abstract class representing a simulation module.
 * @abstract
 */
class SimulationModule {
    constructor() {
      if (new.target === SimulationModule) {
        throw new TypeError("Cannot construct SimulationModule instances directly");
      }
    }
  
    /**
     * Runs the simulation.
     * @abstract
     * @returns {Object}
     */
    run() {
      throw new Error("Method 'run()' must be implemented.");
    }
  }
  
  /**
   * Concrete Simulation class that simulates race scenarios.
   * Demonstrates:
   * - Abstraction (by extending the abstract SimulationModule)
   * - Inheritance (Simulation inherits from SimulationModule)
   * - Polymorphism (Simulation implements its own run() method)
   */
  export class Simulation extends SimulationModule {
    /**
     * Creates a new Simulation.
     * @param {Object} inputData - The input data (e.g., scenario and team).
     * @param {Object} simulationParameters - Parameters controlling the simulation.
     */
    constructor(inputData, simulationParameters) {
      super();
      this.inputData = inputData;
      this.simulationParameters = simulationParameters;
      this.simulationResults = null;
    }
  
    /**
     * Runs the simulation.
     * @returns {Object} The simulation results.
     */
    run() {
      // A simple simulation calculation:
      this.simulationResults = {
        performanceScore: (Math.random() * (0.85 - 0.70) + 0.70) * 100 * this.simulationParameters.difficultyFactor, // 85 seconds being the max lap time and 70 being the lowest
        message: "Simulation completed successfully."
      };
      return this.simulationResults;
    }
  }
  
```

- `Simulation` can replace `SimulationModule` without breaking functionality.

**What would break it?**
-If Simulation deviated from the expected behavior of `SimulationModule` (e.g., by throwing unexpected errors), then substituting it in functions expecting a `SimulationModule` would break the program.

### 4. Interface Segregation Principle
**Example:**
```js
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
  
```

- `Driver` class **only** exposes driver-specific methods (e.g., `recordLap()`), avoiding unnecessary dependencies.

**What would break it?**
- If the `Driver` interface included unrelated methods (like UI updates or simulation control), then clients would be forced to depend on functionality they do not use, increasing coupling and complexity.

### 5. Dependency Inversion Principle
**Example:**
```js
/**
 * @file Simulation.js
 * @description Represents a simulation module for race scenarios.
 */

/**
 * Abstract class representing a simulation module.
 * @abstract
 */
class SimulationModule {
    constructor() {
      if (new.target === SimulationModule) {
        throw new TypeError("Cannot construct SimulationModule instances directly");
      }
    }
  
    /**
     * Runs the simulation.
     * @abstract
     * @returns {Object}
     */
    run() {
      throw new Error("Method 'run()' must be implemented.");
    }
  }
  
  /**
   * Concrete Simulation class that simulates race scenarios.
   * Demonstrates:
   * - Abstraction (by extending the abstract SimulationModule)
   * - Inheritance (Simulation inherits from SimulationModule)
   * - Polymorphism (Simulation implements its own run() method)
   */
  export class Simulation extends SimulationModule {
    /**
     * Creates a new Simulation.
     * @param {Object} inputData - The input data (e.g., scenario and team).
     * @param {Object} simulationParameters - Parameters controlling the simulation.
     */
    constructor(inputData, simulationParameters) {
      super();
      this.inputData = inputData;
      this.simulationParameters = simulationParameters;
      this.simulationResults = null;
    }
  
    /**
     * Runs the simulation.
     * @returns {Object} The simulation results.
     */
    run() {
      // A simple simulation calculation:
      this.simulationResults = {
        performanceScore: (Math.random() * (0.85 - 0.70) + 0.70) * 100 * this.simulationParameters.difficultyFactor, // 85 seconds being the max lap time and 70 being the lowest
        message: "Simulation completed successfully."
      };
      return this.simulationResults;
    }
  }
  
```

- High-level modules depend on abstractions rather than concrete classes. 
- `Simulation` depends on the **abstract** `SimulationModule`, making it flexible and testable.

**What would break it?**
- If high-level modules were tightly coupled to concrete classes, any change in those classes would ripple through the codebase, reducing modularity and making maintenance more difficult.

---

## Design Patterns

### 1. Singleton Pattern
```js
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
  

  // added this comment to see if commit works
```
- Ensures **only one** instance of `Config` exists, thus following the **singleton** design pattern.

**what would break it?**
- Making multiple configuration instances
- Allowing multiple configuration instances could lead to inconsistent settings in different parts of the application, resulting in unpredictable behavior.



### 2. Factory Pattern
```js
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

```
- Centralizes object creation.
- Allows us to create new strategies without having to modify existing code
- This is a factory pattern since the object instantiation is abstracted from the actual Strategy Class, using the createStrategy() method.

**What would break it?**
- If strategies were created in a disorganized manner throughout the codebase, you'd face duplicated logic and inconsistent instantiation, complicating maintenance.

### 3. Builder Pattern
```js
/**
 * @file SimulationBuilder.js
 * @description Builder for constructing Simulation objects.
 */
import { Simulation } from "./Simulation.js";

export class SimulationBuilder {
  constructor() {
    this.inputData = null;
    this.simulationParameters = { difficultyFactor: 1 };
  }

  /**
   * Sets the input data for the simulation.
   * @param {Object} inputData
   * @returns {SimulationBuilder}
   */
  setInputData(inputData) {
    this.inputData = inputData;
    return this;
  }

  /**
   * Sets additional simulation parameters.
   * @param {Object} params
   * @returns {SimulationBuilder}
   */
  setSimulationParameters(params) {
    this.simulationParameters = { ...this.simulationParameters, ...params };
    return this;
  }

  /**
   * Builds and returns the Simulation object.
   * @returns {Simulation}
   */
  build() {
    if (!this.inputData) {
      throw new Error("Input data is required for simulation.");
    }
    return new Simulation(this.inputData, this.simulationParameters);
  }
}

```
- Allows flexible object creation.
- Good example of builder pattern since it allows for the **step by step** creation of a **complex object** using these methods - `setInputData()` and `setSimulationParameters()`.

**What would break it?**
- Without the `build()` method the `Simulation` object might only be partially initialized.
- Without a builder, constructing a `Simulation` object might lead to incomplete or inconsistent initialization, causing runtime errors. 

---

## Testing

### Team.test.js

```js
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

```

- **Initialization Check:**
  - Confirms that a new `Team` instance sets the team name and initializes empty arrays for drivers and strategies.

- **Method Verification:**
  - Tests that `addDriver()` correctly adds a driver.
  - Tests that `addStrategy()` correctly adds a strategy.

- **Clarity & Isolation:**
  - Each test is focused on one aspect of functionality.
  - Clear and direct assertions make expected behaviors obvious.

- **Maintainability:**
  - Simple tests ensure that any changes in the class behavior are quickly detected.


### Simulation.test.js

```js
import { SimulationBuilder } from "../src/SimulationBuilder.js";
import { RaceScenario } from "../src/RaceScenario.js";
import { Team } from "../src/Team.js";
import { Driver } from "../src/Driver.js";

describe('Simulation', () => {
  test('should build and run simulation', () => {
    const scenario = new RaceScenario({
      trackConditions: "Mixed",
      weather: "Cloudy",
      tireDegradationRate: 0.3,
      fuelConsumptionRate: 1.1,
      lapCount: 50
    });
    const team = new Team("Test Team");
    const driver = new Driver("Test Driver", "Test Role");
    team.addDriver(driver);

    const simulation = new SimulationBuilder()
      .setInputData({ scenario, team })
      .setSimulationParameters({ difficultyFactor: 1 })
      .build();

    const results = simulation.run();
    expect(results).toHaveProperty('performanceScore');
    expect(results).toHaveProperty('message', 'Simulation completed successfully.');
  });
});
```
- **Focused Testing**: Validates core functionality (building/running simulations) without overcomplication  
- **Realistic Data**: Uses actual class instances (RaceScenario, Team) for relevant testing  
- **Builder Verification**: Confirms SimulationBuilder correctly constructs simulations  
- **Result Structure Check**: Ensures output contains expected properties/types  
- **Behavior Validation**: Confirms simulation completes with success message  
- **Modular Design**: Tests work independently while being part of larger test suite

### Report.test.js

```js
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
```

- **Constructor Validation**: Verifies all constructor parameters initialize correctly  
- **Type Checking**: Confirms timestamp defaults to Date instance when not provided  
- **Property Integrity**: Ensures report ID, summary, and analysis store passed values accurately  
- **Test Isolation**: Uses beforeEach() to create fresh instances for each test case  
- **Core Functionality**: Focuses exclusively on data storage role of Report class  
- **Default Handling**: Tests automatic timestamp assignment behavior  
- **Minimalist Design**: Tests only essential features without over-engineering

### RaceScenario.test.js

```js
import { RaceScenario } from "../src/RaceScenario.js";

describe('RaceScenario Class', () => {
  test('should initialize with correct properties', () => {
    const scenario = new RaceScenario({
      trackConditions: "Dry",
      weather: "Sunny",
      tireDegradationRate: 0.2,
      fuelConsumptionRate: 1.0,
      lapCount: 60
    });
    expect(scenario.trackConditions).toBe("Dry");
    expect(scenario.weather).toBe("Sunny");
    expect(scenario.tireDegradationRate).toBe(0.2);
    expect(scenario.fuelConsumptionRate).toBe(1.0);
    expect(scenario.lapCount).toBe(60);
  });
});
```
- **Parameter Validation**: Tests all constructor parameters get assigned correctly  
- **Data Integrity**: Verifies numerical values (degradation/fuel rates) store accurately  
- **Real-World Values**: Uses plausible racing conditions ("Dry", "Sunny") for relevance  
- **Structural Testing**: Confirms object parameter destructuring works as intended  
- **Core Responsibility**: Focuses solely on data storage role of scenario class  
- **Complete Coverage**: Checks every property exposed by the class instance  
- **Simplicity**: Straightforward test without over-engineering for pure data class  
- **Documentation**: Shows correct usage pattern for creating RaceScenario instances

### Race.test.js

```js
/**
 * @file Race.test.js
 * @description Tests for the Race class.
 */

import { Race } from "../src/Race.js";
import { RaceScenario } from "../src/RaceScenario.js";

describe("Race Class", () => {
  let raceScenario, race;

  beforeEach(() => {
    raceScenario = new RaceScenario({
      trackConditions: "Dry",
      weather: "Sunny",
      tireDegradationRate: 0.2,
      fuelConsumptionRate: 1.0,
      lapCount: 50
    });

    race = new Race("Silverstone", 50, raceScenario);
  });

  test("should initialize with correct properties", () => {
    expect(race.track).toBe("Silverstone");
    expect(race.laps).toBe(50);
    expect(race.scenario).toBe(raceScenario);
  });

  test("should have a valid RaceScenario instance", () => {
    expect(race.scenario).toBeInstanceOf(RaceScenario);
    expect(race.scenario.trackConditions).toBe("Dry");
    expect(race.scenario.weather).toBe("Sunny");
  });
});
```
- **Core Property Verification**: Validates track name, lap count, and scenario assignment in constructor  
- **Dependency Check**: Confirms proper integration with RaceScenario class through instance verification  
- **Scenario Integrity**: Ensures linked scenario maintains its own property values  
- **Test Isolation**: Uses beforeEach() to create clean instances for each test case  
- **Type Safety**: Verifies scenario property is correct class type  
- **Realistic Data**: Uses actual track name ("Silverstone") and plausible lap numbers  
- **Collaboration Testing**: Demonstrates proper class composition between Race and RaceScenario  
- **Boundary Clarity**: Tests both direct properties and nested object relationships  
- **Maintainability**: Simple structure mirrors straightforward data container role  
- **Documentation**: Shows correct usage pattern for creating Race instances with scenarios

### Driver.test.js

```js
import { Driver }  from "../src/Driver.js";

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
```
- **Test Isolation:** Uses `beforeEach()` for clean test state
- **Encapsulation Respect:** Properly handles private `_lapTimes` with temporary getter
- **Precision Handling:** Uses `toBeCloseTo()` for floating-point math
- **Realistic Data:** Uses plausible F1 lap times (85-90 seconds)
- **Clear Structure:** Follows Arrange-Act-Assert pattern

### Dashboard.test.js

```js
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
```
- **Property Initialization**: Tests verify empty arrays and objects are created correctly
- **Element Management**: Confirms elements are added and stored properly
- **Alert Configuration**: Validates threshold setting functionality
- **Render Output**: Ensures correct string formatting of dashboard elements
- **Clean State**: Uses `beforeEach` to provide fresh dashboard for each test


---
