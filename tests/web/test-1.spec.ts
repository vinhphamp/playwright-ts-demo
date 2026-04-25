import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByText('User Role', { exact: true }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByText('Employee Name', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('P');
  await page.getByText('Pawan Kalyan Konidela').click();
  await page.getByText('Status', { exact: true }).click();
  await page.getByText('-- Select --').nth(1).click();
  await page.getByRole('listbox').getByText('Enabled').click();
  await page.getByText('-- Select --').click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: ' Add' }).click();

  console.log("checking git with multi-branch") // happen in mac_codes branch
});