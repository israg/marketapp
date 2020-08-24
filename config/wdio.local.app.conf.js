const { config } = require('./wdio.conf');

// ============
// Specs
// ============
config.specs = [
    './test/specs/cases/case1.spec.js',
    './test/specs/cases/case2.spec.js',
];

config.suites = {
    case1: [
        './test/specs/cases/case1.spec.js'
    ],
    case2: [
        './test/specs/cases/case2.spec.js'
    ],
};


config.exclude = [
    //'./test/specs/task/*.spec.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        deviceName: 'emulator-5554',
        platformVersion: '9.0',
        orientation: 'PORTRAIT',
        automationName: 'UiAutomator2',
        app: 'https://cdn.getir.com/misc/case-studies/getir-testing-case-study.apk',
        noReset: false,
        newCommandTimeout: 240,
        autoGrantPermissions: true,
    },
];

exports.config = config;