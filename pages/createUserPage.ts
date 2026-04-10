import { Page, Locator, test, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class CreateUserPage {
    readonly page: Page;

    readonly userRoleGroup;
    readonly userRoleLabel;
    readonly userRoleDropdown;
    readonly userRoleErrorMessage;
    
    readonly statusGroup;
    readonly statusLabel;
    readonly statusDropDown;
    readonly statusErrorMessage;
    
    readonly employeeNameGroup;
    readonly employeeNameLabel;
    readonly employeeNameField
    readonly employeeErrorMessage;
    
    readonly userNameGroup;
    readonly userNameLabel;
    readonly userNameField;
    readonly userNameErrorMessage;

    readonly passwordField;
    readonly confirmPasswordField;
    readonly adduserText;
    readonly saveButton;

    


    constructor(page: Page) {
        this.page = page;

        this.userRoleGroup = page.locator('.oxd-input-group').filter({ has: page.locator('label', { hasText: 'User Role' })});
        // this.userRoleGroup = page.locator('.oxd-input-group').filter({ has: this.page.getByText('User Role', { exact: true}) });
        this.userRoleLabel = this.userRoleGroup.locator('label', { hasText: 'User Role' });
        this.userRoleDropdown = this.userRoleGroup.locator('.oxd-select-text-input');
        this.userRoleErrorMessage = this.userRoleGroup.locator('.oxd-input-field-error-message');

        this.statusGroup = page.locator('.oxd-input-group').filter({ has: page.locator('label', { hasText: 'Status'}) })
        // this.statusGroup = page.locator('.oxd-input-group').filter({ has: this.page.getByText('Status', { exact: true }) });
        this.statusLabel = this.statusGroup.locator('label', { hasText: 'Status' });
        this.statusDropDown = this.statusGroup.locator('.oxd-select-text-input');
        this.statusErrorMessage = this.statusGroup.locator('.oxd-input-field-error-message');
        
        this.employeeNameGroup = page.locator('.oxd-input-group').filter({ has: this.page.getByText('Employee Name', { exact: true }) });
        this.employeeNameLabel = page.getByLabel('Employee Name');
        this.employeeNameField = this.employeeNameGroup.getByPlaceholder('Type for hints...')
        this.employeeErrorMessage = this.employeeNameGroup.locator('.oxd-input-field-error-message');        
     
        this.userNameGroup = page.locator('.oxd-input-group').filter({ has: this.page.getByText('Username', { exact: true }) });
        this.userNameLabel = this.userNameGroup.getByText('Username');
        this.userNameField = this.userNameGroup.locator('.oxd-input--active');
        this.userNameErrorMessage = this.userNameGroup.locator('.oxd-input-field-error-message');

        this.passwordField = page.getByRole('textbox', { name: 'Password'});
        this.confirmPasswordField = page.getByRole('textbox', { name: 'Confirm Password'});
        this.adduserText = page.getByText('Add User', { exact: true });
        this.saveButton = page.getByRole('button', { name: "Save"});
        

    }

    async verifyAddUserPageIsDisplayed() {
        await BasePage.isVisible(this.adduserText);
        await BasePage.isVisible(this.userRoleLabel);
        await this.employeeNameLabel.isVisible();       
        await BasePage.isVisible(this.statusLabel);
        await this.userNameLabel.isVisible();

    }

    async verifyRequiredMessage() {
        await this.saveButton.click();
        await expect(this.userRoleErrorMessage).toHaveText('Required');
        await expect(this.userRoleErrorMessage).toHaveText('Required');
        await expect(this.employeeErrorMessage).toHaveText('Required');
        await this.userRoleDropdown.click();
        await this.userRoleDropdown.click();
        await this.statusDropDown.click();
        await this.statusDropDown.click();
        await this.employeeNameField.click();

        
    }



}

