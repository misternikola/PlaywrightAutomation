const{test, expect} =  require('@playwright/test')

test('BuiltLocators', async({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Search by alt text
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //Search by placeholders
    await page.getByPlaceholder('username').fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");
    await page.getByRole('button',{type: 'submit'}).click();

    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    await expect(await page.getByText(name)).toBeVisible();
})