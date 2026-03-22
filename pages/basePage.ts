import { Locator, expect, Page } from '@playwright/test';

export class BasePage {
    

    static async click(locator: Locator) {  //example: await BasePage.click(this.loginButton);
        await expect(locator).toBeVisible();
        await locator.click();
    }

    static async fill(locator: Locator, value: string) {  //example: await BasePage.fill(this.passwordInput, password);
        await expect(locator).toBeVisible();
        await locator.fill(value);
    }

    static async getText(locator: Locator): Promise<string> {
        await expect(locator).toBeVisible();
        return await locator.innerText();
    }
    /* example in using:
        async getPageTitle(): Promise<string> {
            return await BasePage.getText(this.pageTitle); // thay "locator" = "this.pageTitle"
    }
    */

    static async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }
    /* example in using:
        async isAdminLinkVisible(): Promise<boolean> {
            return await BasePage.isVisible(this.adminLink);
    }
    */


}