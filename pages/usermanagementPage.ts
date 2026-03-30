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

/*
  await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByText('User Role', { exact: true }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByText('Employee Name', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('P');
  await page.getByText('Pawan Kalyan Konidela').click();
  await page.getByText('Status', { exact: true }).click();
  await page.getByText('-- Select --').nth(1).click();
  await page.getByRole('listbox').getByText('Enabled').click();
  await page.getByText('-- Select --').click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: ' Add' }).click();

*/