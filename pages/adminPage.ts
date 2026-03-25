import { Page, Locator, expect } from "@playwright/test";
import { DashboardPage } from "./dashboardPage";
import { listen } from "node:quic";

export class AdminPage {
    readonly page: Page;
    readonly usermanagerDropdown: Locator;
    readonly jobDropdown: Locator;
    readonly organizationDropdown: Locator;
    readonly userMenuItem: Locator

    constructor(page: Page) {
        this.page = page;
        this.usermanagerDropdown = page.locator('span.oxd-topbar-body-nav-tab-item', { hasText: 'User Management'});
        this.userMenuItem = page.getByRole('menuitem', { name: 'User' });
        // this.usermanagerDropdown = page.getByRole('menuitem', { name: 'User Management'});
        this.jobDropdown = page.getByRole('menuitem', { name: 'Job' });
        this.organizationDropdown = page.getByRole('listitem', { name: 'Organization' });
    }

    async navigateToUserManagementPage () {        
        await this.usermanagerDropdown.click();
        await expect(this.userMenuItem).toBeVisible();
    }

    async navigateToJobPage () {
        this.jobDropdown.click();
    }

    async navigateToOrganizationPage () {
        this.organizationDropdown.click();
    }

}