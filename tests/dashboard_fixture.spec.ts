import { test, expect } from '../fixtures/baseFixture';
import { DashboardPage } from '../pages/dashboardPage';

test.describe('Checking Dashboard Page', () => {
    let dashboard: DashboardPage;

    test.beforeEach(async ({ loggedInPage }) => {
        dashboard = new DashboardPage(loggedInPage);

    });

    test('Verify the UI of dashboard page', async () => {
        await dashboard.checkDashboardUI();

    })      
    
});
