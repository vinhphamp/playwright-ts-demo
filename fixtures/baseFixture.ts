import { test as base, expect as baseExpect, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import envData from '../test-data/environment/urls.data.json';
import accData from '../test-data/users/login.data.json';

type MyFixtures = {
    loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({ page }, use) => {
        const login = new LoginPage(page);
        await login.goto(envData.test.url);
        await login.login(accData.validUser.username, accData.validUser.password);
        await use(page);
    }
});

export const expect = baseExpect;