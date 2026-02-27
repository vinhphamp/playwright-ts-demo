import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameGroup: Locator;
    readonly passwordGroup: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly dashboardHome: Locator;
    readonly requireMessageUsername: Locator;
    readonly requireMessagePassword: Locator;
    readonly alert: Locator;
    

    constructor(page: Page) {
        this.page = page;
        
        this.usernameInput = page.locator('[name="username"]');
        this.passwordInput = page.locator('[name="password"]');

        this.usernameGroup = page.locator('.oxd-input-group:has([name="username"])');
        this.passwordGroup = page.locator('.oxd-input-group:has([name="password"])');
        const errorSelector = ':is(.oxd-input-group__message, .oxd-input-field-error-message)';
        
        this.requireMessageUsername = this.usernameGroup
            .locator(errorSelector)
            .filter({hasText: 'Required'});

        this.requireMessagePassword = this.passwordGroup
            .locator(errorSelector)
            .filter({hasText: 'Required'});

        this.loginButton = page.getByRole('button', { name: /Login/i });

        this.dashboardHome = page.locator('.oxd-main-menu-item--name', { hasText: 'Dashboard' });
      
        this.alert = page.getByRole('alert');
        
    }

    async goto(url: string) {
        await this.page.goto(url);
        await expect(this.page).toHaveURL(/\/auth\/login$/, { timeout: 10_000 });
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
        await expect(this.alert).toBeVisible({ timeout: 10_000 });
        await expect(this.alert).toContainText('Invalid credentials');
    }

    async assertLoginEmptyAccount() {        
        await this.loginButton.click();
        await expect(this.requireMessageUsername).toBeVisible({timeout: 10_000});
        await expect(this.requireMessagePassword).toBeVisible({timeout: 10_000});
    }

}

