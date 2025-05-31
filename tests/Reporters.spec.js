const{test, expect} = require('@playwright/test')

test('test1', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
})

/*
test('test2', async ({page}) =>{
    await page.goto('https://www.demo.opencart.com/');
    await expect(page).toHaveTitle('Your Store');
})
    */   //something is not properly working here

test('test3', async ({page}) =>{
    await page.goto('https://www.nopcommerce.com/');
    await expect(page).toHaveTitle('Free and open-source eCommerce platform. ASP.NET Core based shopping cart. - nopCommerce');
})

// if we select  Reporters: 'list' than in the terminal the results will be listed as a list
