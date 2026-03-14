import { workerTest as test, expect, workerTest } from '../fixtures/baseFixture_worker'; // use with scope: worker 
import { DashboardPage } from '../pages/dashboardPage';


test.describe('Checking Dashboard Page', () => {
    
    test('Verify the UI of dashboard page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.checkDashboardUI();

    })
    
    test('Verify link Admin link to Admin page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.clickAdminLink();
    })
    
});

/*
test.describe('Checking Dashboard Page', () => {
    let dashboard: DashboardPage;

    test.beforeEach(async ({ loggedInPage }) => {
        dashboard = new DashboardPage(loggedInPage);

    });

    test('Verify the UI of dashboard page', async () => {
        await dashboard.checkDashboardUI();

    })
    
    test('Verify link Admin link to Admin page', async () => {
        await dashboard.clickAdminLink();
    })
    
});
*/

