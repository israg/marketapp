exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'silent',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // Test runner services
    services: ['appium'],
    appium: {
        command: 'appium',
    },

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    onPrepare: function (capabilities) {
        console.log('<<< Market App Test Started >>>')
    },

    before: function () {
        console.log('before start')
    },

    beforeSuite: function (suite) {
        console.log('suite started');
    },

    afterSuite: function (suite) {
        console.log('suited finished');
    },

    onComplete: function () {
        console.log('<<< Market App Test Finished >>>')
    }

}
