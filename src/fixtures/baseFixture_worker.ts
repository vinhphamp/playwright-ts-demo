import { test as base, expect as baseExpect, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import envData from '../../test-data/environment/urls.data.json';
import accData from '../../test-data/users/login.data.json';

import { DashboardPage } from '../pages/dashboardPage';

type MyFixtures = {
    dashboardPage: DashboardPage;
};

export const workerTest = base.extend<MyFixtures>({
    dashboardPage: [
        async ({ browser }, use) => {
            console.log("LOGIN RUNNING...");

            const context = await browser.newContext();
            const page = await context.newPage();

            const login = new LoginPage(page);
            await login.goto(envData.test.url);
            await login.login(accData.validUser.username, accData.validUser.password);
            await login.assertLoginSuccess();

            const dashboardPage = new DashboardPage(page);
            await use(dashboardPage);
            await context.close();
        },
        { scope: 'worker' } as any
    ],
});

export const expect = baseExpect;
