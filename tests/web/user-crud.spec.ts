import { test as base } from '@playwright/test';
import { test, expect } from "../../fixtures/baseFixture";
import { AdminPage } from "../../pages/adminPage";
import { DashboardPage } from "../../pages/dashboardPage";
import { UserManagementPage } from "../../pages/usermanagementPage";
import { CreateUserPage } from "../../pages/createUserPage";
import { buildUser } from '../../helpers/data/userDataBuilder';


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

        const newUser = buildUser();
        console.log('generated username', newUser.username);
        await createUser.addInformationNewUser(newUser);
        await usermanagement.verifyUserManagementPageIsDisplayed();
        
        /*
        -> file spec -> sample call 2 methods to search generated username again from user list to verify the action to create new user successfully
        await usermanagement.searchUserByUsername(newUser.username);
        await usermanagement.verifyUserDisplayedInList(newUser.username);

        -> add more 2 methods into usermanagementPage.ts
        
        async searchUserByUsername(username: string): Promise<void> {
            await this.usernameSearchField.fill(username);
            await this.searchButton.click();
            }       
        async verifyUserDisplayedInList(username: string): Promise<void> {
            await expect(this.page.getByRole('cell', { name: username })).toBeVisible();
            }

        */

    }); 
    
});
