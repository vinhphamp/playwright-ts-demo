import { Locator, expect } from '@playwright/test';

export class UIHelper {

  static async click(locator: Locator) {  //example: await UIHelper.click(this.loginButton);
    await expect(locator).toBeVisible();
    await locator.click();
  }

  static async fill(locator: Locator, value: string) {  //example: await UIHelper.fill(this.passwordInput, password);
    await expect(locator).toBeVisible();
    await locator.fill(value);
  }

}