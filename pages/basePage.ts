import { Locator, expect, Page } from '@playwright/test';

export class BasePage {
    

    static async click(locator: Locator) {  //example: await BasePage.click(this.loginButton);
        await expect(locator).toBeVisible();
        await expect(locator).toBeEnabled();
        await locator.click();
    }

    static async fill(locator: Locator, value: string) {  //example: await BasePage.fill(this.passwordInput, 'password123456');
        await expect(locator).toBeVisible();
        await locator.fill(value);
    }

    static async getText(locator: Locator): Promise<string> { // example: return await BasePage.getText(this.pageTitle); // thay "locator" = "this.pageTitle"
        await expect(locator).toBeVisible();
        return await locator.innerText();
    }

    static async isVisible(locator: Locator): Promise<void> { // example: return await BasePage.isVisible(this.adminLink);
        await expect(locator).toBeVisible();
    }
    
}