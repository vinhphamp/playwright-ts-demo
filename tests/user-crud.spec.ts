import { BasePage } from "../pages/basePage";
import { test, expect } from "../fixtures/baseFixture";
import { DashboardPage } from "../pages/dashboardPage";
import { AdminPage } from "../pages/adminPage";
import { UserManagementPage } from "../pages/usermanagementPage";

test.describe('User Management Module', () => {    

    test.beforeEach(async ({ loggedInPage })=> {
        const dashboard = new DashboardPage(loggedInPage);
        const adminpage = await dashboard.navigatetoAdminPage();
        
        await adminpage.usermanagerDropdown.click();
        await adminpage.userMenuItem.click();



    });


});
