import { join } from 'path';
import config from './wdio.shared.local.appium.conf';

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
// https://discuss.appium.io/t/activity-used-to-start-app-doesnt-exist-or-cannot-be-launched-make-sure-it-exists-and-is-a-launchable-activity/18216/5
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        'appium:deviceName': 'Pixel_3_API_29',
        'appium:platformVersion': '9.0',
        'appium:udid': 'emulator-5554',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './binary/android/EvaHealth.apk'),
        // @ts-ignore
        'appium:appWaitActivity': 'io.appery.project702115.MainActivity',
        'appium:fullReset': true,
        //'appium:autoGrantPermissions': true,
        'appium:autoWebview': true,

        //'appium:ensureWebviewsHavePages': true,
        //'appium:unicodeKeyboard': true,
        //'appium:resetKeyboard': true,

        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': false,
        'appium:newCommandTimeout': 240

        //'appium:appWaitDuration': 80000,
        //'appium:autoWebviewTimeout': 10000,
        //'appium:adbExecTimeout': 80000
    },
];

exports.config = config;
