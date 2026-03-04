import { Page, Locator, expect } from "@playwright/test";
import { UIHelper } from "../helpers/uiHelper";

export class DashboardPage {
    readonly page: Page;
    readonly collapseLeftIcon: Locator;
    readonly collapseRightIcon: Locator;
    readonly searchSidebar: Locator;
    readonly adminLink: Locator;
    readonly pimLink: Locator;
    readonly leaveLink: Locator;
    readonly timeLink: Locator;
    readonly recruitmentLink: Locator;
    readonly myinfoLink: Locator;
    readonly performanceLink: Locator;
    readonly dashboardLink: Locator;
    readonly directoryLink: Locator;



    constructor(page: Page) {
        this.page = page;
        // this.searchSidebar = page.getByPlaceholder('Search');
        this.searchSidebar = page.locator("//input[@placeholder='Search']");
        this.adminLink = page.getByRole('link', {name: 'Admin'});
        this.pimLink = page.locator("span:has-text('PIM')");
        this.collapseLeftIcon = page.locator("i.oxd-icon.bi-chevron-left");
        this.collapseRightIcon = page.locator("i.oxd-icon.bi-chevron-right");
        this.leaveLink = page.locator('span:has-text("Leave")');
        this.timeLink = page.getByRole('link', { name: 'Time'});
        this.recruitmentLink = page.getByRole('link', { name: 'Recruitment'});
        this.myinfoLink = page.getByRole('link', { name: 'My Info'});
        this.performanceLink = page.getByRole('link', { name: 'Performance'});
        this.dashboardLink = page.getByRole('link', { name: 'Dashboard'});
        this.directoryLink = page.getByRole('link', { name: 'Directory'});

    }

    async checkDashboardUI () {
        // await expect(this.searchSidebar).toBeVisible({timeout: 10_000});
        await expect(this.collapseLeftIcon).toBeVisible();
        await UIHelper.wait(5000);
        await this.collapseLeftIcon.click();
        await this.collapseRightIcon.click();
        await expect(this.searchSidebar).toBeVisible();
        await expect(this.adminLink).toBeVisible();
        await expect(this.pimLink).toBeVisible();
        await expect(this.leaveLink).toBeVisible();
        await expect(this.leaveLink).toBeVisible();
        await expect(this.timeLink).toBeVisible();
        await expect(this.recruitmentLink).toBeVisible();
        await expect(this.myinfoLink).toBeVisible();
        await expect(this.performanceLink).toBeVisible();
        await expect(this.dashboardLink).toBeVisible();
        await expect(this.directoryLink).toBeVisible();
        


    }  
    

}