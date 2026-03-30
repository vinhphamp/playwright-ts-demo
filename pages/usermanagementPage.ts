import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class UserManagementPage {
    readonly page: Page;
    readonly systemUsersHeading: Locator;


    constructor(page:Page) {
        this.page = page;
        this.systemUsersHeading = page.getByRole('heading', { level: 5, name: 'System Users' });

    }

    async verifyUserManagementPageIsDisplayed (): Promise<void> {
        await BasePage.isVisible(this.systemUsersHeading);
    }

}