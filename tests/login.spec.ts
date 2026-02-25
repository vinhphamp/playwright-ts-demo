import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Checking', () => {

    test('Login Success', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login('Admin', 'admin123');
        await login.assertLoginSuccess();
        
    });

    test('Login not success', async ({page}) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login('Vinh', 'vinh123');
        await login.assertLoginNotSuccess()

    });







});