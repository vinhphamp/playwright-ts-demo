import { Page, Locator, expect } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;
    searchSidebar: Locator;
    adminLink: Locator;
    pimLink: Locator;



    constructor(page: Page) {
        this.page = page;
        // this.searchSidebar = page.getByPlaceholder('Search');
        this.searchSidebar = page.locator("//input[@placeholder='Search']");
        this.adminLink = page.getByRole('link', {name: 'Admin'});
        this.pimLink = page.locator("span:has-text('PIM')");
        





    }

    async checkDashboardUI () {
        // await expect(this.searchSidebar).toBeVisible({timeout: 10_000});
        await expect(this.searchSidebar).toBeVisible();
        await expect(this.adminLink).toBeVisible();
        await expect(this.pimLink).toBeVisible();
        console.log('Check UI completed!')


    }  
    

}