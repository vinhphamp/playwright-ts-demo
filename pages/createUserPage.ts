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
}