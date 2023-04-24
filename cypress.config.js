const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'uvxv9k',  
    reporter: "mochawesome",
    "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite": true,
    "html": true,
    "json": false,
    "timestamp": "mmddyyyy_HHMMss"   
},
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});