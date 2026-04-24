import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class UserManagementPage {
    readonly page: Page;
    readonly systemUsersHeading: Locator;
    readonly addButton: Locator;
    readonly usernameLabel: Locator;
    readonly userroleLabel: Locator;
    readonly statusLabel: Locator;
    readonly userRowGroup: Locator;
    readonly userEditButton: Locator;



    constructor(page:Page) {
        this.page = page;
        this.systemUsersHeading = page.getByRole('heading', { level: 5, name: 'System Users' });
        this.addButton = page.getByRole('button', { name: 'Add'});
        this.usernameLabel = page.getByText('Username', { exact: true});
        this.userroleLabel = page.getByText('User Role', { exact: true});
        this.statusLabel = page.getByText('Status', { exact: true});
        this.userRowGroup = this.page.locator('.oxd-table-row').filter({ has: this.page.getByText('vinhautotest_01', { exact: true })});
        this.userEditButton = this.userRowGroup.locator('.oxd-icon.bi-pencil-fill');

    }

    async verifyUserManagementPageIsDisplayed (): Promise<void> {
        await expect(this.page).toHaveURL(/viewSystemUsers/);
        await BasePage.isVisible(this.systemUsersHeading);
        await BasePage.isVisible(this.usernameLabel);
        await BasePage.isVisible(this.userroleLabel);
        await BasePage.isVisible(this.statusLabel);

    }

    async navigateToAddUserPage(){
        await this.addButton.click();
    }

    async navigateToEditUserPage(){
        await this.userEditButton.click();
    }

}

