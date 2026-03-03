import { Locator } from '@playwright/test';

export class UIHelper {

  static async wait(ms: number) {  
    return new Promise(resolve => setTimeout(resolve, ms));
  } //await UIHelper.wait(2000);
  
  static async waitAndClick(locator: Locator, timeout: number = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
    await locator.click();
  }


}
