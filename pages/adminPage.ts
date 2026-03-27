import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from '../pages/basePage';
import { UserManagementPage } from "./usermanagementPage";


export class AdminPage {
    readonly page: Page;
    readonly usermanagerDropdown: Locator;
    readonly userMenuItem: Locator
    readonly jobDropdown: Locator; 
    readonly jobtitlesMenuItem: Locator;
    readonly paygradesMenuItem: Locator;
    readonly employeestatusMenuItem: Locator;
    readonly jobcategoriesMenuItem: Locator;
    readonly workshiftsMenuItem: Locator;
    readonly organizationDropdown: Locator;
    readonly generalinformationMenuItem: Locator;
    readonly locationsMenuItem: Locator;
    readonly structureMenuItem: Locator;

    constructor(page: Page) {
        this.page = page;
        // --------------------------
        this.usermanagerDropdown = page.locator('span.oxd-topbar-body-nav-tab-item', { hasText: 'User Management'});
        this.userMenuItem = page.getByRole('menuitem', { name: 'User' });
        // this.usermanagerDropdown = page.getByRole('menuitem', { name: 'User Management'});
        // --------------------------
        this.jobDropdown = page.getByRole('menuitem', { name: 'Job' });
        this.jobtitlesMenuItem = page.getByRole('menuitem', { name: 'Job Titles'});
        this.paygradesMenuItem = page.getByRole('menuitem', { name: 'Pay Grades'});
        this.employeestatusMenuItem = page.getByRole('menuitem', { name: 'Employee Status'});
        this.jobcategoriesMenuItem = page.getByRole('menuitem', { name: 'Job Categories'});
        this.workshiftsMenuItem = page.getByRole('menuitem', { name: 'Work Shifts'});
        // --------------------------
        this.organizationDropdown = page.getByRole('listitem', { name: 'Organization' });
        this.generalinformationMenuItem = page.getByRole('menuitem', { name: 'General Information'});
        this.locationsMenuItem = page.getByRole('menuitem', { name: 'Locations'});
        this.structureMenuItem = page.getByRole('menuitem', { name: 'Structure'});

        
    }

    async navigateToUserManagementPage (): Promise<UserManagementPage> {        
        await BasePage.click(this.usermanagerDropdown);
        await expect(this.userMenuItem).toBeVisible();
        await BasePage.click(this.userMenuItem);
        return new UserManagementPage(this.page); // return to following page

    }

    async navigateToJobPage () { // not redirect to new page
        await this.jobDropdown.click();
    }

    /*
    async navigateToJobPage (): Promise<void> { // not redirect to new page
        await this.jobDropdown.click();
    }

    async navigateToJobPage (): Promise<JobPage> { // redirect to new page
        await this.jobDropdown.click();
        return new JobPage(this.page);
    }
    */
   
    async navigateToOrganizationPage () {
        this.organizationDropdown.click();
    }

}