const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "cypress-mochawesome-reporter, mocha-junit-reporter",
      "cypressMochawesomeReporterReporterOptions": {
        "reportDir": "cypress/reports",
        "charts": true,
        "reportPageTitle": "Test Execution Report",
        "embeddedScreenshots": true,
        "inlineAssets": true
      },
      "mochaJunitReporterReporterOptions": {
        "mochaFile": "cypress/reports/junit/results-[hash].xml"
      }
    },
    "video": false,
  
    setupNodeEvents(on, config) {
      
      this.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },

    specPattern:
      ["**/**/*.feature", "cypress/e2e/*.cy.{js,jsx,ts,tsx}"],
  },
});
