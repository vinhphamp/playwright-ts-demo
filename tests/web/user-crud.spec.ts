import { test as base } from '@playwright/test';
import { test, expect } from "../../fixtures/baseFixture";
import { AdminPage } from "../../pages/adminPage";
import { DashboardPage } from "../../pages/dashboardPage";
import { UserManagementPage } from "../../pages/usermanagementPage";
import { CreateUserPage } from "../../pages/createUserPage";
import createUserData from "../../test-data/users/createuser.data.json";


test.describe('User Management Module', () => {
    let dashboard: DashboardPage;
    let usermanagement: UserManagementPage;
    let admin: AdminPage;
    let createUser: CreateUserPage;    

    test.beforeEach(async ({ loggedInPage })=> {
        dashboard = new DashboardPage(loggedInPage);
        usermanagement = new UserManagementPage(loggedInPage);
        admin = new AdminPage(loggedInPage);
        createUser = new CreateUserPage(loggedInPage);
        await dashboard.navigatetoAdminPage();                
        await admin.usermanagerDropdown.click();
        await admin.userMenuItem.click();
        await expect(loggedInPage).toHaveURL(/viewSystemUsers/);

    });

    test('Verify the UI of user management page', async () => {
        await usermanagement.verifyUserManagementPageIsDisplayed();        

    });

    test('Verify the UI of add new user page', async () => {
        await usermanagement.navigateToAddUserPage();
        await createUser.verifyAddUserPageIsDisplayed();

    });

    test('Verify the error message to require fields', async ()=> {
        await usermanagement.navigateToAddUserPage();
        await createUser.verifyAddUserPageIsDisplayed();
        await createUser.verifyRequiredMessage();
    });

    test('Create new user successfully', async () => {
        await usermanagement.navigateToAddUserPage();
        await createUser.verifyAddUserPageIsDisplayed();
        await createUser.verifyRequiredMessage();
        await createUser.addInformationNewUser(createUserData.newUser);

    }); 
    
});
