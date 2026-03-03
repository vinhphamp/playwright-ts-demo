import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import loginData from '../test-data/users/login.data.json';
import envData from '../test-data/environment/urls.data.json';

test.describe ('Dashboard Checking', () => {
    let login: LoginPage;
    let dashboard: DashboardPage;

    test.beforeEach(async ({page}) => {
        login = new LoginPage(page);
        dashboard = new DashboardPage(page);
        await login.goto(envData.test.url);
        await login.login(loginData.validUser.username, loginData.validUser.password);
        console.log("Load dashboard page successfully");

    });

    test.only('Verify the UI of dashboard page', async ({page}) => {
        await dashboard.checkDashboardUI();


    });

});

