import { test } from '../../src/fixtures/baseFixture';
import { DashboardPage } from '../../src/pages/dashboardPage';
import { AdminPage } from '../../src/pages/adminPage';
import { UserManagementPage } from '../../src/pages/usermanagementPage';

test.describe('User Management', () => {
  let userManagementPage: UserManagementPage;

  test.beforeEach(async ({ loggedInPage }) => {
    const dashboard = new DashboardPage(loggedInPage);
    const adminPage = await dashboard.navigatetoAdminPage();
    userManagementPage = await adminPage.navigateToUserManagementPage();
  });

  test('User Management UI is displayed', async () => {
      await userManagementPage.verifyUserManagementPageIsDisplayed();
    });

  test('Create new user successfully', async () => {

    });

  test('Edit existing user', async () => {

    });

});