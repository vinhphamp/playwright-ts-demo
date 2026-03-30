import { Page, Locator, test, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class UserPage {
    readonly page: Page;
    readonly addButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addButton = page.getByRole('button', { name: 'Add'});
    }


}
