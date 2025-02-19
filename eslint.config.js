import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    languageOptions: { 
      globals: { 
        ...globals.browser, 
        ...globals.node,
        ...globals.jest // Ensure Jest globals like 'beforeEach', 'describe', and 'test' are recognized
      } 
    } 
  },
  pluginJs.configs.recommended,
  pluginJest.configs.recommended // Adds recommended Jest rules
];
