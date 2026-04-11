import { test, expect } from '../../fixtures/baseFixture'; // use with scope: test
import { DashboardPage } from '../../pages/dashboardPage';


test.describe('Checking Dashboard Page', () => {
    let dashboard: DashboardPage;

    test.beforeEach(async ({ loggedInPage }) => {
        dashboard = new DashboardPage(loggedInPage);

    });

    test('Verify the UI of dashboard page', async () => {
        await dashboard.checkDashboardUI();

    })
    
    test('Navigate to Leave page', async () => {
        await dashboard.navigatetoLeavePage();
    });

    test('Navigate to Recruitment page', async () => {
        await dashboard.navigatetoRecruitmentPage();
    });

    test('Log Out Successfully', async () => {
        await dashboard.logOutSuccess();       

    });
    
});
