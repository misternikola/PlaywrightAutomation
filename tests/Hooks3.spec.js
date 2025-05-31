import {test,expect} from '@playwright/test'

let page;

test.beforeAll(async ({browser}) => {
 
 page = await browser.newPage();

 
await page.goto('https://www.demoblaze.com/index.html')
 
 //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('//button[normalize-space()="Log in"]').click();
}
);

test.afterAll(async() =>{
   
   await page.locator('#logout2').click();
} )

test('Home page test', async () => {   
     
  const products =  await page.$$('.hrefch');

  expect(products).toHaveLength(9);  

});


