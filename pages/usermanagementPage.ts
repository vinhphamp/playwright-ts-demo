import { test, Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class UserManagementPage {
    readonly page: Page;
    readonly systemusersHeading: Locator;


    constructor(page:Page) {
        this.page = page;
        this.systemusersHeading = page.getByRole('heading', { level: 5, name: 'System Users'});

    }

    async verifyUserManagementPageIsDisplayed () {
        await BasePage.isVisible(this.systemusersHeading);
    }

}