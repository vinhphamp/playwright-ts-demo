import { test as base, expect as baseExpect, Page, Browser, BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import envData from '../test-data/environment/urls.data.json';
import accData from '../test-data/users/login.data.json';

type MyFixtures = {
    loggedInPage: Page;
};

// Nếu muốn scope: 'worker', bạn viết như sau:
export const workerTest = base.extend<MyFixtures>({
  loggedInPage: [
    async ({ browser }, use) => {
      console.log("LOGIN RUNNING...");

      const context = await browser.newContext();
      const page = await context.newPage();
      
      const login = new LoginPage(page);
      await login.goto(envData.test.url);
      await login.login(accData.validUser.username, accData.validUser.password);
      await login.assertLoginSuccess();
      
      await use(page);
      await context.close();
    },
    { scope: 'worker' } as any 
  ],

});

/*
// scope: 'test' (mặc định, login mỗi test)
export const test = base.extend<MyFixtures>({
    loggedInPage: async ({ page }, use) => {
        const login = new LoginPage(page);
        await login.goto(envData.test.url);
        await login.login(accData.validUser.username, accData.validUser.password);
        await use(page);
    }
}); 
*/

export const expect = baseExpect;