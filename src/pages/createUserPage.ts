import { Page, Locator, test, expect } from "@playwright/test";
import { BasePage } from "./basePage";
import creatUserData from "../../test-data/users/createuser.data.json";





export type NewUserInfo = {
    userrole: string;
    userstatus: string;
    employeename: string;
    username: string;
    password: string;
    confirmpassword: string;
}

export class CreateUserPage {
    readonly page: Page;

    readonly userRoleGroup: Locator;
    readonly userRoleLabel: Locator;
    readonly userRoleDropdown: Locator;
    readonly userRoleValue: Locator;
    readonly userRoleErrorMessage: Locator;
    
    readonly statusGroup: Locator;
    readonly statusLabel: Locator;
    readonly statusDropDown: Locator;
    readonly statusErrorMessage: Locator;
    
    readonly employeeNameGroup: Locator;
    readonly employeeNameLabel: Locator;
    readonly employeeNameField: Locator;
    readonly employeeErrorMessage: Locator;
    
    readonly userNameGroup: Locator;
    readonly userNameLabel: Locator;
    readonly userNameField: Locator;
    readonly userNameErrorMessage: Locator;

    readonly passwordGroup: Locator;
    readonly passwordLabel: Locator;
    readonly passwordField: Locator;
    readonly passwordErrorMessage: Locator;

    readonly confirmpasswordGroup: Locator;
    readonly confirmpasswordLabel: Locator;
    readonly confirmpasswordField: Locator;
    readonly confirmpasswordErrorMessage: Locator;

    readonly adduserText: Locator;
    readonly saveButton: Locator;

    


    constructor(page: Page) {
        this.page = page;

        this.userRoleGroup = page.locator('.oxd-input-group').filter({ has: page.locator('label', { hasText: 'User Role' })});
        this.userRoleValue = this.userRoleGroup.getByRole('option', { name: 'ESS'});
        this.userRoleLabel = this.userRoleGroup.locator('label', { hasText: 'User Role' });
        this.userRoleDropdown = this.userRoleGroup.locator('.oxd-select-text-input');
        this.userRoleErrorMessage = this.userRoleGroup.locator('.oxd-input-field-error-message');

        this.statusGroup = page.locator('.oxd-input-group').filter({ has: page.locator('label', { hasText: 'Status'}) })
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

        this.passwordGroup = page.locator('.oxd-input-group').filter({ has: page.locator('label', { hasText: /^Password$/ }) });
        this.passwordLabel = this.passwordGroup.getByText('Password');
        this.passwordField = this.passwordGroup.locator('.oxd-input--active');
        this.passwordErrorMessage = this.passwordGroup.locator('.oxd-input-field-error-message');

        this.confirmpasswordGroup = page.locator('.oxd-input-group').filter({ has: page.locator('label', { hasText: 'Confirm Password' }) });
        this.confirmpasswordLabel = this.confirmpasswordGroup.locator('.oxd-label', { hasText: 'Confirm Password'});
        this.confirmpasswordField = this.confirmpasswordGroup.locator('.oxd-input--active');
        this.confirmpasswordErrorMessage = this.confirmpasswordGroup.locator('.oxd-input-field-error-message');

        
        this.adduserText = page.getByText('Add User', { exact: true });
        this.saveButton = page.getByRole('button', { name: "Save"});
        

    }

    async selectUserRole(role: string): Promise<void> {
        await this.userRoleDropdown.click();
        await this.userRoleGroup.getByRole('option', { name: role }).click();
    }

    async selectStatus(role: string): Promise<void> {
        await this.statusDropDown.click();
        await this.statusGroup.getByRole('option', { name: role }).click();
    }

    async selectFirstEmployeeName(name: string): Promise<void> {
        await this.employeeNameField.fill(name);
        await this.page.waitForSelector('[role="listbox"]');
        await this.employeeNameGroup.locator('.oxd-autocomplete-dropdown span').first().click();
    }

    async verifyAddUserPageIsDisplayed(): Promise<void> {
        await expect(this.page).toHaveURL(/saveSystemUser/);
        await BasePage.isVisible(this.adduserText);
        await BasePage.isVisible(this.userRoleLabel);
        await this.employeeNameLabel.isVisible();       
        await BasePage.isVisible(this.statusLabel);
        await this.userNameLabel.isVisible();
        await this.saveButton.isVisible();

    }

    async verifyRequiredMessage(): Promise<void> {
        await this.saveButton.isVisible();
        await this.saveButton.click();
        await expect(this.userRoleErrorMessage).toHaveText('Required');
        await expect(this.employeeErrorMessage).toHaveText('Required');
        await expect(this.passwordErrorMessage).toHaveText('Required');
        await expect(this.confirmpasswordErrorMessage).toHaveText('Passwords do not match'); 
    }

    async addInformationNewUser(userInfo: NewUserInfo): Promise<void> {
        await this.selectUserRole(userInfo.userrole);
        await this.selectStatus(userInfo.userstatus);
        await this.selectFirstEmployeeName(userInfo.employeename);
        await this.userNameField.fill(userInfo.username);
        await this.passwordField.fill(userInfo.password);
        await this.confirmpasswordField.fill(userInfo.confirmpassword);
        await this.saveButton.click();  
    }

        
}

