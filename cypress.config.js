const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 7000,
  viewportHeight: 1080,
  viewportHeight: 1920,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});