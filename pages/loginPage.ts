import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly dashboardHome: Locator;
    readonly errorMessage: Locator;
    readonly requireMessageUsername: Locator;
    readonly requireMessagePassword: Locator;

    constructor(page: Page) {
        this.page = page;
        
        //this.usernameInput = page.getByPlaceholder('Username');        
        //this.passwordInput = page.getByPlaceholder('Password');

        // this.usernameInput = page.getByLabel('Username');
        // this.passwordInput = page.getByLabel('Password');

        this.usernameInput = page.locator('[name="username"]');
        this.passwordInput = page.locator('[name="password"]');

        this.loginButton = page.getByRole('button', { name: /Login/i });

        this.dashboardHome = page.locator('.oxd-main-menu-item--name', { hasText: 'Dashboard' });

        this.errorMessage = page.getByText('Invalid credentials', { exact: true });  

        this.requireMessageUsername = page
            .locator('.oxd-input-group', {has: this.usernameInput})
            .locator('.oxd-input-group__message')
            .filter({hasText: 'Required'});

        this.requireMessagePassword = page
            .locator('.oxd-input-group', {has: this.passwordInput})
            .locator('.oxd-input-group__message')
            .filter({hasText: 'Required'});

    }

    async goto(url: string) {
        await this.page.goto(url);
        await expect(this.usernameInput).toBeVisible({ timeout: 10_000 });
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async assertLoginSuccess() {
        await expect(this.dashboardHome).toBeVisible({ timeout: 10_000 });
    }

    async assertLoginNotSuccess() {
        await expect(this.errorMessage).toBeVisible({ timeout: 10_000 });
    }

    async assertLoginEmptyAccount() {        
        await this.loginButton.click();
        await expect(this.requireMessageUsername).toBeVisible({timeout: 10_000});
        await expect(this.requireMessagePassword).toBeVisible({timeout: 10_000});
    }


}