import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';
import { UIHelper } from '../helpers/uiHelper';
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
        await UIHelper.wait(5000);
        console.log("Load dashboard page successfully");

    });

    test('Verify the UI of dashboard page', async ({page}) => {
        await dashboard.checkDashboardUI();
        console.log('Check UI completed!');


    });

});

