 import { test } from '@playwright/test';

 test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Form').click()
    await page.getByText('Form Layouts').click()
 })

 test('Locator syntax rules', async({page}) => {
    //by Tagname
    page.locator('input')

    //by ID
    page.locator('#inputEmail')

    //by Class value
    page.locator('.shape-rectangle')

    //by attribute
    page.locator('[placeholder="Email"]')

    //by Class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transaction"]')

    //combine different selectors
    page.locator('input[placeholder="Email"][nbinput]')

    //by partial text match
    page.locator(':text("Using")')

    //by partial text match
    page.locator(':text-is("Using the Grid")')

    //by XPath (NOT RECOMMENDED)
    page.locator('//*[@id="inputEmail"]')

 })