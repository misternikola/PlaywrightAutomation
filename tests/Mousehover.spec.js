const{test, expect} =  require('@playwright/test')

test('Mouse hover', async({page}) => {
  
    await page.goto('https://testautomationpractice.blogspot.com/?m=1')

    await page.waitForTimeout(3000);

    const desktop = await page.locator('//button[@class="dropbtn"]');

    const mob = await page.locator('//button[@id="PopUp"]');

    await desktop.hover();

    await page.waitForTimeout(3000);

    await mob.hover();

    await page.waitForTimeout(5000);
})