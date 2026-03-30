import { Page, Locator, test, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export class EditUserPage {
    readonly page: Page;
    

    constructor(page: Page) {
        this.page = page;

    }
}