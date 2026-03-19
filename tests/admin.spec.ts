import { test, expect } from '../fixtures/baseFixture';
import { AdminPage } from '../pages/adminPage';
import { DashboardPage } from '../pages/dashboardPage';
import { UIHelper } from '../helpers/uiHelper';

test('should open Admin page', async ({ loggedInPage }) => {

  const dashboard = new DashboardPage(loggedInPage);
  const admin = new AdminPage(loggedInPage);

  await test.step('Navigate to Admin page', async () => {
    await dashboard.navigatetoAdminPage();
    await expect(loggedInPage).toHaveURL(/admin/);
  });

  await test.step('Verify Admin UI', async () => {
    await expect(admin.usermanagerDropdown).toBeVisible();
    await admin.usermanagerDropdown.click()
    await expect(admin.userMenuItem).toBeVisible();
  });

});