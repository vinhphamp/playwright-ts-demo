import { Page } from '@playwright/test';
import { test, expect } from '../fixtures/baseFixture';
import { DashboardPage } from '../pages/dashboardPage';

test.describe('Checking Dashboard Page', () => {
    test('Verify the UI of dashboard page', async ({ loggedInPage }) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.checkDashboardUI();

    })       
    

});
