import { workerTest as test, expect } from '../fixtures/baseFixture_worker';
import { DashboardPage } from '../pages/dashboardPage';


test.describe('Checking Dashboard Page', () => {

    test('Verify the UI of dashboard page', async ({ dashboardPage }) => {
        
        await dashboardPage.checkDashboardUI();
    });

    test('Verify link Admin link to Admin page', async ({ dashboardPage }) => {
        
        await dashboardPage.navigatetoAdminPage();
    });

    test('Navigate to Leave page', async ({ dashboardPage }) => {
        
        await dashboardPage.navigatetoLeavePage();
    });

    test('Navigate to Recruitment page', async ({ dashboardPage }) => {
        
        await dashboardPage.navigatetoRecruitmentPage();
    });

    test('Navigate to My Info page', async ({ dashboardPage }) => {
        
        await dashboardPage.navigatetoMyInfoPage();
    });

    test('Navigate to Performance page', async ({ dashboardPage }) => {
        
        await dashboardPage.navigatetoPerformancePage();
    });

    test('Navigate to Dashboard page', async ({ dashboardPage }) => {
        
        await dashboardPage.navigatetoDashboardPage();
    });

    test('Navigate to Directory page', async ({ dashboardPage }) => {
        
        await dashboardPage.navigatetoDirectoryPage();
    });

    test('Navigate to Claim page', async ({ dashboardPage }) => {
        
        await dashboardPage.navigatetoClaimPage();
    });

    test('Navigate to Buzz page', async ({ dashboardPage }) => {
        
        await dashboardPage.navigatetoBuzzPage();
    });

});
