  const{test,expect} = require('@playwright/test')

  test('handle radiobutton',async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

    await page.locator("//input[@value='M']").check();

    await expect(await page.locator("//input[@value='M']")).toBeChecked();
    await expect(await page.locator("//input[@value='M']").isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@value='F']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
  })