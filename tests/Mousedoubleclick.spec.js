const{test,expect} =  require('@playwright/test')

test('Mouse double click', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const btncopy = await page.locator('(//button)[17]');

    await btncopy.dblclick();

    const f2 = await page.locator('#field2');

    await expect(f2).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);
})