  const{test,expect} = require('@playwright/test')

  test("Handle multyselect", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?m=1');

    // await page.selectOption('#colors',['Blue','Red','Yellow']);

    //assertations

    /*
    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(7);
    */

    const options = await page.$$('#colors option');
    console.log("Number of options ",options.length);
    //assertation
    await expect(options.length).toBe(7);

    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();

    await page.waitForTimeout(5000);
  })