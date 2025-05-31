const {test, expect} = require('@playwright/test')

test('AssertionsTest', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%sF');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%sF');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    // Use this just in case
    // const searchbox = await page.locator('#small-searchterms');
    // await expect(searchbox).toBeEnabled();

    await test.step('Verify search box is enabled', async () => {
        const searchbox = await page.locator('#small-searchterms');
        await expect(searchbox).toBeEnabled();
    });

    const maleradiobutton = await page.locator('#gender-male');
    await maleradiobutton.click();
    await expect(maleradiobutton).toBeChecked();

    const newscheckbox = await page.locator('#Newsletter');
    await expect(newscheckbox).toBeChecked

    const register = await page.locator('#register-button');
    await expect(register).toHaveAttribute('type','submit');

    await expect(await page.locator('.page-title h1')).toHaveText('Register');

    await expect(await page.locator('.page-title h1')).toContainText('Reg');

    const emailinput=await page.locator('#Email');
    await emailinput.fill('test@demo.com');
    await expect(emailinput).toHaveValue('test@demo.com');
})