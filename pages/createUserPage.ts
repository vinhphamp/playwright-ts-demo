import { Page, Locator, test, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class CreateUserPage {
    readonly page: Page;
    readonly userRoleGroup;
    readonly userRoleLabel;
    readonly userRoleDropdown;
    readonly userRoleErrorMessage;
    readonly statusGroup;
    readonly statusDropDown;
    readonly statusErrorMessage;
    readonly employeeNameField;
    readonly userNameField;
    readonly passwordField;
    readonly confirmPasswordField;
    readonly adduserText;
    readonly saveButton;
    


    constructor(page: Page) {
        this.page = page;
        this.userRoleGroup = this.page.locator('.oxd-input-group').filter({ has: this.page.getByText('User Role', { exact: true}) })
        this.userRoleLabel = page.getByLabel('User Role');
        this.userRoleDropdown = this.userRoleGroup.locator('.oxd-select-text-input');
        this.userRoleErrorMessage = this.userRoleGroup.locator('.oxd-input-field-error-message');
        this.statusGroup = page.locator('.oxd-input-group').filter({ has: this.page.getByText('Status', { exact: true }) });
        this.statusDropDown = this.statusGroup.locator('.oxd-select-text-input');
        this.statusErrorMessage = this.statusGroup.locator('.oxd-input-field-error-message');        
        this.employeeNameField = page.getByPlaceholder('Type for hints...');
        this.userNameField = page.getByRole('textbox' , { name: 'Username'});
        this.passwordField = page.getByRole('textbox', { name: 'Password'});
        this.confirmPasswordField = page.getByRole('textbox', { name: 'Confirm Password'});
        this.adduserText = page.getByText('Add User', { exact: true });
        this.saveButton = page.getByRole('button', { name: "Save"});
        

    }

    async verifyAddUserPageIsDisplayed() {
        await BasePage.isVisible(this.adduserText);

    }

    async verifyRequiredMessage() {
        await this.saveButton.click();
        await expect(this.userRoleErrorMessage).toHaveText('Required');
        await expect(this.userRoleErrorMessage).toHaveText('Required');
        await this.userRoleDropdown.click();
        await this.userRoleDropdown.click();
        await this.statusDropDown.click();

        
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