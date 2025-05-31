const{test,expect} = require('@playwright/test')

test('Mouse right click', async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const button =await page.locator('(//p)[1]/span');

    await button.click({button: 'right'});

    await page.waitForTimeout(5000);

})