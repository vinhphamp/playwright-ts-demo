import { Page, Locator, test, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class CreateUserPage {
    readonly page: Page;
    readonly userRoleDropdown;
    readonly statusDropDown;
    readonly employeeNameField;
    readonly userNameField;
    readonly passwordField;
    readonly confirmPasswordField;


    constructor(page: Page) {
        this.page = page;
        this.userRoleDropdown = page.getByLabel('User Role');
        this.statusDropDown = page.getByRole('list', { name: 'Status' });
        this.employeeNameField = page.getByPlaceholder('Type for hints...');
        this.userNameField = page.getByRole('textbox' , { name: 'Username'});
        this.passwordField = page.getByRole('textbox', { name: 'Password'});
        this.confirmPasswordField = page.getByRole('textbox', { name: 'Confirm Password'});

    }

    async verifyAddUserPageIsDisplayed() {

    }



}

/*
await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Username' }).press('Tab');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('heading', { name: 'Dashboard' }).click();
await page.getByRole('link', { name: 'Admin' }).click();
await page.getByLabel('Topbar Menu').getByText('User Management').click();
await page.getByRole('menuitem', { name: 'Users' }).click();
await page.getByRole('button', { name: ' Add' }).click();
await page.getByText('User Role').click();
await page.getByText('-- Select --').first().click();
await page.getByText('Employee Name').click();
await page.getByRole('textbox', { name: 'Type for hints...' }).click();
await page.getByRole('textbox', { name: 'Type for hints...' }).fill('P');
await page.getByText('Peter Mac Anderson').click();
await page.getByText('Status').click();
await page.getByText('-- Select --').nth(1).click();
await page.getByText('Username').click();
await page.getByRole('textbox').nth(2).click();
await page.getByRole('textbox').nth(3).click();
await page.getByRole('textbox').nth(4).click();
await page.getByRole('button', { name: 'Save' }).click();
await page.getByRole('button', { name: 'Cancel' }).click();
*/