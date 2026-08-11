import { Locator, expect, Page } from '@playwright/test';

export class ElementHelper {

// --- ELEMENT ACTIONS -----------------------------------    

    static async click(locator: Locator) {  
        //  example: await BasePage.click(this.loginButton);
        await expect(locator).toBeVisible();
        await expect(locator).toBeEnabled();
        await locator.click();
    }

    static async fill(locator: Locator, value: string) {  
        //  example: await BasePage.fill(this.passwordInput, 'password123456');
        await expect(locator).toBeVisible();
        await locator.fill(value);
    }

    static async getText(locator: Locator): Promise<string> { 
        // example: return await BasePage.getText(this.pageTitle); // thay "locator" = "this.pageTitle"
        await expect(locator).toBeVisible();
        return await locator.innerText();
    }

    static async isVisible(locator: Locator, timeout = 10000): Promise<void> { 
        // example: return await BasePage.isVisible(this.adminLink);
        await expect(locator).toBeVisible();
    }

// --- ELEMENT STATE --------------------------------

    static async isEnabled(locator: Locator): Promise<void> {  
        // Example: await BasePage.isEnabled(this.submitButton);
        await expect(locator).toBeEnabled();
    }

    static async isDisabled(locator: Locator): Promise<void> {  
        // Example: await BasePage.isDisabled(this.cancelButton);
        await expect(locator).toBeDisabled();
    }

    static async isHidden(locator: Locator): Promise<void> {  
        // Example: await BasePage.isHidden(this.popupDialog);
        await expect(locator).toBeHidden();
    }

    static async isChecked(locator: Locator): Promise<void> {  
        // Example: await BasePage.isChecked(this.rememberMeCheckbox);
        await expect(locator).toBeChecked();
    }

    static async isUnchecked(locator: Locator): Promise<void> {  
        // Example: await BasePage.isUnchecked(this.newsletterCheckbox);
        await expect(locator).not.toBeChecked();
    }

    // ── ELEMENT INTERACTION ─────────────────────────────

    static async clearAndFill(locator: Locator, value: string) {  
        // Example: await BasePage.clearAndFill(this.searchBox, 'Playwright');
        await expect(locator).toBeVisible();
        await locator.clear();
        await locator.fill(value);
    }

    static async selectOption(locator: Locator, value: string) {  
        // Example: await BasePage.selectOption(this.countryDropdown, 'United States');
        await expect(locator).toBeVisible();
        await locator.selectOption({ label: value });
    }

    static async doubleClick(locator: Locator) {  
        // Example: await BasePage.doubleClick(this.fileItem);
        await expect(locator).toBeVisible();
        await expect(locator).toBeEnabled();
        await locator.dblclick();
    }

    static async rightClick(locator: Locator) {  
        // Example: await BasePage.rightClick(this.contextMenuArea);
        await expect(locator).toBeVisible();
        await locator.click({ button: 'right' });
    }

    static async hover(locator: Locator) {  
        // Example: await BasePage.hover(this.profilePicture);
        await expect(locator).toBeVisible();
        await locator.hover();
    }

// ── ELEMENT VALUE ───────────────────────────────────

    static async getInputValue(locator: Locator): Promise<string> {  
        // Example: const value = await BasePage.getInputValue(this.emailInput);
        await expect(locator).toBeVisible();
        return await locator.inputValue();
    }

    static async getAttribute(locator: Locator, attribute: string): Promise<string | null> {  
        // Example: const href = await BasePage.getAttribute(this.linkElement, 'href');
        await expect(locator).toBeVisible();
        return await locator.getAttribute(attribute);
    }

    static async hasText(locator: Locator, text: string): Promise<void> {  
        // Example: await BasePage.hasText(this.alertMessage, 'Login successful');
        await expect(locator).toContainText(text);
    }

    static async hasExactText(locator: Locator, text: string): Promise<void> {  
        // Example: await BasePage.hasExactText(this.pageHeader, 'Dashboard');
        await expect(locator).toHaveText(text);
    }

// ── WAIT ────────────────────────────────────────────

    static async waitForVisible(locator: Locator, timeout = 5000) {  
        // Example: await BasePage.waitForVisible(this.loadingSpinner, 10000);
        await locator.waitFor({ state: 'visible', timeout });
    }

    static async waitForHidden(locator: Locator, timeout = 5000) {  
        // Example: await BasePage.waitForHidden(this.modalDialog);
        await locator.waitFor({ state: 'hidden', timeout });
    }

    static async waitForAttached(locator: Locator, timeout = 5000) {  
        // Example: await BasePage.waitForAttached(this.dynamicElement);
        await locator.waitFor({ state: 'attached', timeout });
    }

// ── PAGE ────────────────────────────────────────────

    static async waitForPageLoad(page: Page) {  
        // Example: await BasePage.waitForPageLoad(this.page);
        await page.waitForLoadState('networkidle');
    }

    static async hasURL(page: Page, url: string) {  
        // Example: await BasePage.hasURL(this.page, 'https://example.com/dashboard');
        await expect(page).toHaveURL(url);
    }

    static async urlContains(page: Page, url: string) {  
        // Example: await BasePage.urlContains(this.page, '/profile');
        await expect(page).toHaveURL(new RegExp(url));
    }

// ── SCROLL ──────────────────────────────────────────

    static async scrollToElement(locator: Locator) {  
        // Example: await BasePage.scrollToElement(this.footerSection);
        await locator.scrollIntoViewIfNeeded();
    }

// ── UPLOAD ──────────────────────────────────────────

    static async uploadFile(locator: Locator, filePath: string) {  
        // Example: await BasePage.uploadFile(this.fileInput, 'tests/data/sample.pdf');
        await locator.setInputFiles(filePath);
    }


    
}
