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
    readonly dashboardHeading: Locator;    

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
        this.dashboardHeading = page.getByRole('heading', {level: 6, name: /^Dashboard$/,});
        this.dashboardLink = page.getByRole('link', { name: 'Dashboard'});
        this.directoryLink = page.getByRole('link', { name: 'Directory'});
        this.maintenanceLink = page.getByRole('link', { name: 'Maintenance'});
        this.claimLink = page.getByRole('link', { name: 'Claim'});
        this.buzzLink = page.getByRole('link', { name: 'Buzz'});
        this.getprofileName = page.locator('.oxd-userdropdown-tab');
        
    }

    async checkDashboardUI () {
        await expect(this.dashboardHeading).toBeVisible();
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
    
    getPageHeading(text: string): Locator {
        return this.page.getByRole('heading', {
            name: new RegExp(text, 'i'), level: 6 
        });
    }

    async navigatetoAdminPage () {
        await BasePage.click(this.adminLink);
        await BasePage.isVisible(this.getPageHeading('Admin'));
        console.log('Navigate to Admin page successfully');        
    }
    
    async navigatetoPIMPage () {
        await BasePage.click(this.pimLink);
        await BasePage.isVisible(this.getPageHeading('PIM'));
        console.log('Navigate to PIM page successfully');
    }

    async navigatetoLeavePage () {
        await BasePage.click(this.leaveLink);
        await BasePage.isVisible(this.getPageHeading('Leave'))
        console.log('Navigate to Leave page successfully')
    }

    async navigatetoTimePage () {
        await BasePage.click(this.timeLink);
        await BasePage.isVisible(this.getPageHeading('Time'));     
        console.log('Navigate to Time page successfully')        
    }

    async navigatetoRecruitmentPage () {
        await BasePage.click(this.recruitmentLink);
        await BasePage.isVisible(this.getPageHeading('Recruitment'));     
        console.log('Navigate to Recruitment page successfully')        
    }

    async navigatetoMyInfoPage () {
        await BasePage.click(this.myinfoLink);
        await BasePage.isVisible(this.getPageHeading('PIM'));     
        console.log('Navigate to My Info page successfully')        
    }

    async navigatetoPerformancePage () {
        await BasePage.click(this.performanceLink);
        await BasePage.isVisible(this.getPageHeading('Performance'));     
        console.log('Navigate to Performance page successfully')        
    }

    async navigatetoDashboardPage () {
        await BasePage.click(this.dashboardLink);
        await BasePage.isVisible(this.getPageHeading('Dashboard'));     
        console.log('Navigate to Dashboard page successfully')        
    }
    
    async navigatetoDirectoryPage () {
        await BasePage.click(this.directoryLink);
        await BasePage.isVisible(this.getPageHeading('Directory'));     
        console.log('Navigate to Directory page successfully')        
    }

    async navigatetoClaimPage () {
        await BasePage.click(this.claimLink);
        await BasePage.isVisible(this.getPageHeading('Claim'));     
        console.log('Navigate to Claim page successfully')        
    }

    async navigatetoBuzzPage () {
        await BasePage.click(this.buzzLink);
        await BasePage.isVisible(this.getPageHeading('Buzz'));     
        console.log('Navigate to Buzz page successfully')        
    }

    async logOutSuccess () {

        const profileName = await BasePage.getText(this.getprofileName); 
        console.log(profileName);

        await this.page.locator('span').filter({hasText: `${profileName}`}).click();
        await this.page.getByRole('menuitem', { name: 'Logout' }).click();
        console.log('Log Out Success');

    }

}