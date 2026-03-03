import { Page, Locator, expect } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;
    readonly searchSidebar: Locator;
    readonly adminLink: Locator;
    readonly pimLink: Locator;
    readonly collapseLeftIcon: Locator;
    readonly collapseRightIcon: Locator;



    constructor(page: Page) {
        this.page = page;
        // this.searchSidebar = page.getByPlaceholder('Search');
        this.searchSidebar = page.locator("//input[@placeholder='Search']");
        this.adminLink = page.getByRole('link', {name: 'Admin'});
        this.pimLink = page.locator("span:has-text('PIM')");
        this.collapseLeftIcon = page.locator("i.oxd-icon.bi-chevron-left");
        this.collapseRightIcon = page.locator("i.oxd-icon.bi-chevron-right");       





    }

    async checkDashboardUI () {
        // await expect(this.searchSidebar).toBeVisible({timeout: 10_000});
        await this.collapseLeftIcon.click();
        await this.collapseRightIcon.click();
        await expect(this.searchSidebar).toBeVisible();
        await expect(this.adminLink).toBeVisible();
        await expect(this.pimLink).toBeVisible();
        console.log('Check UI completed!')


    }  
    

}