import { AdminPage } from '../pages/adminPage';
import { BasePage } from '../pages/basePage';
import loginData from '../test-data/users/login.data.json';
import envData from '../test-data/environment/urls.data.json';
import { test, expect } from '../fixtures/baseFixture';
import { DashboardPage } from '../pages/dashboardPage';
import { LoginPage } from '../pages/loginPage';

test('Verify Admin Page', async ({ loggedInPage }) => {

    console.log('Login success !')

    const dashboard = new DashboardPage(loggedInPage);
    await dashboard.navigatetoAdminPage();
    
    
    // 2. Tạo AdminPage từ CÙNG loggedInPage (đã ở Admin page)
    const adminpage = new AdminPage(loggedInPage);

    await expect(adminpage.usermanagerDropdown).toBeVisible();

    console.log('wait for User Manager dropdown is appeared');
    
    await adminpage.navigateToUserManagementPage();
    console.log('Loaded User menuitem')
    
});



/*
test.describe('Checking UI of Admin Page', () => {
    let dashboard: DashboardPage;
    let adminpage: AdminPage;


    test.beforeEach(async ({ loggedInPage}) => {
        dashboard = new DashboardPage(loggedInPage);
        console.log('logged already');
    });

    test('Verify Admin Page', async ({page}) => {
        adminpage = new AdminPage(page);
       
        await dashboard.adminLink.click();
        await UIHelper.wait(5000);
        console.log('Click on Admin link')
        
        await adminpage.navigateToUserManagementPage();

    });
});
*/


