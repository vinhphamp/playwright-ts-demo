import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./basePage";


export class DashboardPage {
    readonly page: Page;
    readonly searchSidebar: Locator;
    readonly collapseLeftIcon: Locator;
    readonly collapseRightIcon: Locator;
    readonly adminLink: Locator;
    readonly pimLink: Locator;
    readonly leaveLink: Locator;
    readonly timeLink: Locator;
    readonly recruitmentLink: Locator;
    readonly myinfoLink: Locator;
    readonly performanceLink: Locator;
    readonly dashboardLink: Locator;
    readonly directoryLink: Locator;
    readonly maintenanceLink: Locator;
    readonly claimLink: Locator;
    readonly buzzLink: Locator;
    readonly getprofileName: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.searchSidebar = page.locator("//input[@placeholder='Search']");
        this.collapseLeftIcon = page.locator("i.oxd-icon.bi-chevron-left");
        this.collapseRightIcon = page.locator("i.oxd-icon.bi-chevron-right");
        this.adminLink = page.getByRole('link', {name: 'Admin'});
        this.pimLink = page.locator("span:has-text('PIM')");
        this.leaveLink = page.locator('span:has-text("Leave")');
        this.timeLink = page.getByRole('link', { name: 'Time'});
        this.recruitmentLink = page.getByRole('link', { name: 'Recruitment'});
        this.myinfoLink = page.getByRole('link', { name: 'My Info'});
        this.performanceLink = page.getByRole('link', { name: 'Performance'});
        this.dashboardLink = page.getByRole('link', { name: 'Dashboard'});
        this.directoryLink = page.getByRole('link', { name: 'Directory'});
        this.maintenanceLink = page.getByRole('link', { name: 'Maintenance'});
        this.claimLink = page.getByRole('link', { name: 'Claim'});
        this.buzzLink = page.getByRole('link', { name: 'Buzz'});
        this.getprofileName = page.locator('.oxd-userdropdown-tab');
        
    }

    async checkDashboardUI () {
        await expect(this.searchSidebar).toBeVisible();
        await expect(this.collapseLeftIcon).toBeVisible();
        await this.collapseLeftIcon.click();
        await expect(this.collapseRightIcon).toBeVisible();
        await this.collapseRightIcon.click();  
        // await expect(this.adminLink).toBeVisible();
        await BasePage.isVisible(this.adminLink); // call isVisible from basePage
        await expect(this.pimLink).toBeVisible();
        await expect(this.leaveLink).toBeVisible();
        await expect(this.timeLink).toBeVisible();
        await expect(this.recruitmentLink).toBeVisible();
        await expect(this.myinfoLink).toBeVisible();
        await expect(this.performanceLink).toBeVisible();
        await expect(this.dashboardLink).toBeVisible();
        await expect(this.directoryLink).toBeVisible();     

    }  

    async navigatetoAdminPage () {
        await BasePage.click(this.adminLink);
        console.log('Navigate to Admin page');
        
    }
    
    async navigatetoPIMPage () {
        await BasePage.click(this.pimLink);
        console.log('Navigate to PIM page');
    }

    async logOutSuccess () {

        const profileName = await BasePage.getText(this.getprofileName); 
        console.log(profileName);

        await this.page.locator('span').filter({hasText: `${profileName}`}).click();
        await this.page.getByRole('menuitem', { name: 'Logout' }).click();
        console.log('Log Out Success');

        

        // await page.getByRole('textbox', { name: 'Username' }).click();
        // await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        // await page.getByRole('textbox', { name: 'Password' }).click();
        // await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        // await page.getByRole('button', { name: 'Login' }).click();
        // await page.locator('span').filter({ hasText: 'manda user' }).click();
        // await page.getByRole('menuitem', { name: 'Logout' }).click();
    }

}