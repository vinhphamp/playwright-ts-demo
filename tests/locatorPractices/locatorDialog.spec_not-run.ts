import { test, expect } from '@playwright/test';

test.describe('Dialog Practice', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/pages/modal-overlays/dialog');
    });

    test('verify open and close - Open Dialog', async ({ page }) => {
        const openDialogCard = page.locator('nb-card').filter({
            has: page.locator('nb-card-header', { hasText: 'Open Dialog'                
            })
        });

        await openDialogCard.getByRole('button', { name: 'Open Dialog with component' }).click();  
        const dialog1 = page.locator('nb-dialog-container');        
        await expect(dialog1).toBeVisible();

        // Verify title
        await expect(dialog1.getByText('This is a title passed to the dialog component')).toBeVisible();

        // Verify button Dismiss Dialog
        const dismissButton = dialog1.getByRole('button', { name: 'Dismiss Dialog' });

        await expect(dismissButton).toBeVisible();

        // Click to close dialog
        await dismissButton.click();

        // Verify closed dialog 
        await expect(dialog1).toBeHidden();
    });


    test('Verify open and close - Open Without Backdrop', async ({ page }) => {
        const openWithoutBackdropCard = page.locator('nb-card').filter({ 
            has: page.locator('nb-card-header', { hasText: 'Open Without Backdrop' 
            })
        });
        
        await openWithoutBackdropCard.getByRole('button', { 
            name: 'Open Dialog with backdrop', 
            exact: true
        }).click();

        const dialog2 = page.locator('nb-dialog-container');
        await expect(dialog2).toBeVisible();
        await expect(dialog2.getByText('This is a title passed to the dialog component')).toBeVisible();
        const dismissdialogButton = page.getByRole('button', { name: 'Dismiss Dialog' });
        await expect(dismissdialogButton).toBeVisible();
        await dismissdialogButton.click();
        await expect(dialog2).toBeHidden();
    
    });

});