import { test, expect } from "../fixtures/baseFixture";
import { AdminPage } from "../pages/adminPage";
import { DashboardPage } from "../pages/dashboardPage";
import { UserManagementPage } from "../pages/usermanagementPage";


test.describe('User Management Module', () => {
    let dashboard: DashboardPage;
    let usermanagement: UserManagementPage;
    let admin: AdminPage;    

    test.beforeEach(async ({ loggedInPage })=> {
        dashboard = new DashboardPage(loggedInPage);
        usermanagement = new UserManagementPage(loggedInPage);
        admin = new AdminPage(loggedInPage);
        await dashboard.navigatetoAdminPage();                
        await admin.usermanagerDropdown.click();
        await admin.userMenuItem.click();
        await expect(loggedInPage).toHaveURL(/viewSystemUsers/);
        //expect(usermanagement.verifyUserManagementPageIsDisplayed());
    });

    test('Verify the UI of create new user page', async () => {
        await usermanagement.verifyUserManagementPageIsDisplayed();        

    })
    

    
});
