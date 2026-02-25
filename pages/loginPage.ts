import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly dashboardHome: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        // this.usernameInput = page.getByRole('textbox', { name: 'username' });
        // this.passwordInput = page.getByRole('textbox', { name: 'password' });
        this.loginButton = page.getByRole('button', { name: /Login/i });

        this.dashboardHome = page.locator('.oxd-main-menu-item--name', { hasText: 'Dashboard' });
        // this.dashboardHome = page.getByText(/dashboard/i);        
        // this.dashboardHome = page.getByRole('link', { name: /dashboard/i });
        // this.dashboardHome = page.getByText('Dashboard', { exact: true });
        
        this.errorMessage = page.getByText('Invalid credentials', { exact: true });
    }

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
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


}