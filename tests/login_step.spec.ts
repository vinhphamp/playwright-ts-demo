import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import loginData from '../test-data/users/login.data.json';
import envData from '../test-data/environment/urls.data.json';

test.describe('Authentication | Login', () => {
  let login: LoginPage;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);

    await test.step('Navigate to Login page', async () => {
      await login.goto(envData.test.url);
    });
  });

  test('TC-LOGIN-01 @happy @smoke @regression | Login success', async () => {

    await test.step('Login with valid credentials', async () => {
      await login.login(
        loginData.validUser.username,
        loginData.validUser.password
      );
    });

    await test.step('Verify login successfully', async () => {
      await login.assertLoginSuccess();
    });

  });

  test('TC-LOGIN-02 @unhappy @regression | Login fails with invalid username', async () => {

    await test.step('Attempt login with invalid username', async () => {
      await login.login(
        loginData.invalidUsername.username,
        loginData.invalidUsername.password
      );
    });

    await test.step('Verify login is rejected', async () => {
      await login.assertLoginNotSuccess();
    });

  });

  test('TC-LOGIN-03 @unhappy @regression | Login fails with invalid password', async () => {

    await test.step('Attempt login with invalid password', async () => {
      await login.login(
        loginData.invalidPassword.username,
        loginData.invalidPassword.password
      );
    });

    await test.step('Verify login is rejected', async () => {
      await login.assertLoginNotSuccess();
    });

  });

  test('TC-LOGIN-04 @unhappy @regression | Login with empty credentials', async () => {

    await test.step('Attempt login with empty username and password', async () => {
      await login.assertLoginEmptyAccount();
    });

    await test.step('Verify required field validation is shown', async () => {
      await expect(login.requireMessageUsername).toBeVisible();
      await expect(login.requireMessagePassword).toBeVisible();

    });

  });

});