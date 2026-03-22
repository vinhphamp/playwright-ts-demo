import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { BasePage } from '../pages/basePage';
import loginData from '../test-data/users/login.data.json';
import envData from '../test-data/environment/urls.data.json';
import { env } from 'node:process';

test.describe ('Dashboard Checking', () => {
    let login: LoginPage;
    let dashboard: DashboardPage;

    
    test.beforeEach(async ({page}) => {
        login = new LoginPage(page);
        dashboard = new DashboardPage(page);
        await login.goto(envData.test.url);
        await login.login(loginData.validUser.username, loginData.validUser.password);
        await expect(dashboard.dashboardLink).toBeVisible();
        console.log("Load dashboard page successfully");

    });

    test('Verify Dashboard UI', async () => {
        await dashboard.checkDashboardUI();
        console.log('Dashboard UI Success');
    });
    
    test('Log Out Success', async () => {
        await dashboard.logOutSuccess();
        

    });

    /*
    test('Dashboard Page', async ({page}) => {
        login = new LoginPage(page);
        dashboard = new DashboardPage(page);

        await test.step('Login website success', async () => {
            await login.goto(envData.test.url);
            await login.login(loginData.validUser.username, loginData.validUser.password);
            console.log('Login okay');
        });
        await test.step('Verify UI of Dashboard page', async () => {
            await dashboard.checkDashboardUI();
            console.log("Check UI success");
        });

    });
    */
});

/*
test.describe        → nhóm các test
    └── test         → 1 test case (bắt buộc phải có)
            └── test.step  → các bước trong test
*/

