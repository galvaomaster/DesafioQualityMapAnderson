const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  e2e: {
   // baseUrl:'https://demo.nopcommerce.com/',
    baseUrl:'https://serverest.dev',
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
    on("file:preprocessor", cucumber());
    },
  },
});

