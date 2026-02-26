import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import loginData from '../test-data/users/login.data.json';
import envData from '../test-data/environment/urls.data.json';

test.describe('Login Checking', () => {
    let login: LoginPage;

    test.beforeEach(async ({page}) => {
        login = new LoginPage(page);
        await login.goto(envData.test.url);
    });

    test('Login Success', async ({ page }) => {
        await login.login(loginData.validUser.username, loginData.validUser.password);
        await login.assertLoginSuccess();
        
    });

    test('Login not success with invalid username', async ({page}) => {
        await login.login(loginData.invalidUsername.username, loginData.invalidUsername.password);
        await login.assertLoginNotSuccess();
    });

    test('Login not success with invalid password', async ({page}) => {
        await login.login(loginData.invalidPassword.username, loginData.invalidPassword.password);
        await login.assertLoginNotSuccess()

    });

    test('Login with empty username/password', async ({page})=> {
        await login.assertLoginEmptyAccount();
        // const messageUsername = await login.requireMessageUsername.textContent();
        // const messagePassword = await login.requireMessagePassword.textContent();
        // console.log(messageUsername);
        // console.log(messagePassword);

    });









});