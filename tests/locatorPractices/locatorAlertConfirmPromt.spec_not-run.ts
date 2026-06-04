import { test, expect } from '@playwright/test';

test('handle alert dialog', async ({ page }) => { // Handle Alert

    page.once('dialog', async dialog => {

        console.log('Type:', dialog.type());
        console.log('Message:', dialog.message());

        await dialog.accept();
    });

    await page.locator('#alert-button').click();

});

test('handle confirm dialog accept', async ({ page }) => { // Handle Confirm -> Click OK

    page.once('dialog', async dialog => {

        console.log('Type:', dialog.type());
        console.log('Message:', dialog.message());

        await dialog.accept();
    });

    await page.locator('#confirm-button').click();

});

test('handle confirm dialog dismiss', async ({ page }) => { // Handle Confirm -> Click Cancel

    page.once('dialog', async dialog => {

        console.log('Type:', dialog.type());
        console.log('Message:', dialog.message());

        await dialog.dismiss();
    });

    await page.locator('#confirm-button').click();

});

test('handle prompt dialog', async ({ page }) => { // Handle Prompt

    page.once('dialog', async dialog => {

        console.log('Type:', dialog.type());
        console.log('Message:', dialog.message());

        await dialog.accept('Vinh');
    });

    await page.locator('#prompt-button').click();

});

/*
    // browser-native dialogs:
    // alert()
    // confirm()
    // prompt()
    
    // Verify Dialog Type
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        await dialog.accept();
    });

    // Verify Dialog Message
    page.once('dialog', async dialog => {
        expect(dialog.message())
            .toContain('Delete user');
        await dialog.accept();   
    });

    // Verify Prompt value Returned
    test('handle prompt and verify result', async ({ page }) => {

        page.once('dialog', async dialog => {
            await dialog.accept('Vinh');
        });

        await page.locator('#prompt-button').click();

        await expect(
            page.locator('#result')
        ).toHaveText('Vinh');
    });

    // Generic Helper
    async handleDialog(
    action: 'accept' | 'dismiss',
    promptValue?: string
    ) {

        this.page.once('dialog', async dialog => {

            console.log(dialog.type());
            console.log(dialog.message());

            if (action === 'accept') {
                await dialog.accept(promptValue);
            } else {
                await dialog.dismiss();
            }
        });
    }
*/