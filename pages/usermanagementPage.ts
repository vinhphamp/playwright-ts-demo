import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class UserManagementPage {
    readonly page: Page;
    readonly systemUsersHeading: Locator;
    readonly addButton: Locator;
    readonly usernameLabel: Locator;
    readonly userroleLabel: Locator;
    readonly statusLabel: Locator;



    constructor(page:Page) {
        this.page = page;
        this.systemUsersHeading = page.getByRole('heading', { level: 5, name: 'System Users' });
        this.addButton = page.getByRole('button', { name: 'Add'});
        this.usernameLabel = page.getByText('Username', { exact: true});
        this.userroleLabel = page.getByText('User Role', { exact: true});
        this.statusLabel = page.getByText('Status', { exact: true});

    }

    async verifyUserManagementPageIsDisplayed (): Promise<void> {
        await BasePage.isVisible(this.systemUsersHeading);
        await BasePage.isVisible(this.usernameLabel);
        await BasePage.isVisible(this.userroleLabel);
        await BasePage.isVisible(this.statusLabel);

    }

    async navigateToAddUserPage(){
        await this.addButton.click();
    }

}

