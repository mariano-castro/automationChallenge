// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/e2e/**/*.js',
    chromeWebSecurity: false,
  },
});
