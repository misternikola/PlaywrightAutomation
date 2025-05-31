import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://commitquality.com/practice-file-upload');
  await page.getByTestId('file-input').click();
   await page.waitForTimeout(1000);
  await page.getByTestId('file-input').setInputFiles('TehTest.txt');
 
   await page.waitForTimeout(1000);
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit' }).click();  

});

// npx playwright codegen -o tests/newupload.spec.js