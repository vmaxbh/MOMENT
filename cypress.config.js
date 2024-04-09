const { defineConfig } = require("cypress");
const moment = require('moment');

const dateTime = moment().format('DD-MM-YYYY_HH-mm-ss');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.google.com.br',
    video: true,
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: `cypress/reports/${dateTime}`,
    reportFilename: "[name]-report",
    quiet: true,
    overwrite: false,
    html: true,
    json: false,
  },
  screenshotsFolder: `cypress/reports/${dateTime}/evidências`,
  chromeWebSecurity: false,
  
});