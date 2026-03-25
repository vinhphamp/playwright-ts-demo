import { workerTest as test, expect } from '../fixtures/baseFixture_worker'; // use with scope: worker 
import { DashboardPage } from '../pages/dashboardPage';


test.describe('Checking Dashboard Page', () => {
    
    test('Verify the UI of dashboard page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.checkDashboardUI();

    })
    
    test('Verify link Admin link to Admin page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.navigatetoAdminPage();
    })
    
    test('Navigate to Leave page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.navigatetoLeavePage();
    });

    test('Navigate to Recruitment page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.navigatetoRecruitmentPage();
    });

    test('Navigate to My Info page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.navigatetoMyInfoPage();
    });

    test('Navigate to Performance page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.navigatetoPerformancePage();
    });

    test('Navigate to Dashboard page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.navigatetoDashboardPage();
    });    

    test('Navigate to Directory page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.navigatetoDirectoryPage();
    });
    
    test('Navigate to Claim page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.navigatetoClaimPage();
    });

    test('Navigate to Buzz page', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.navigatetoBuzzPage();
    });    

    /*
    test('Log Out Successfully', async ({loggedInPage}) => {
        const dashboard = new DashboardPage(loggedInPage);
        await dashboard.logOutSuccess();       

    });
    */

});

/*
// using beforeEach step

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

