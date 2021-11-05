import allureReporter from '@wdio/allure-reporter'
import LoginScreen from '../page_objects/login-page';

describe('EVA Health Hybrid App - Login Screen Tests', () => {
    before(async () => {
      allureReporter.addStory('Automate the Login Screen Functionality Combination Tests')
      allureReporter.addFeature('Login Screen')
    });

    it('should be able login successfully', async () => {
        allureReporter.addSeverity("Major")
        allureReporter.addStep("Verifiy Static Screen Elements")
        await LoginScreen.verify_static_elements();
    });
});
