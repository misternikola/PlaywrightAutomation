   const {test, expect} = require('@playwright/test');

   test('Keyboard actions', async ({page}) => {

      await page.goto("https://gotranscript.com/text-compare"); 

       await page.waitForTimeout(2000);

 
     await page.waitForTimeout(2000);

         
              const btncopy = await page.locator("(//textarea)[1]");

      await btncopy.click();

     await btncopy.fill('test');

      await page.waitForTimeout(2000);

       await btncopy.click();
     
      await page.keyboard.press('Control+A');

      await page.keyboard.press('Control+C');

      await page.keyboard.down('Tab')
      await page.keyboard.up('Tab')

      await page.keyboard.press('Control+V')
     

      await page.waitForTimeout(5000);
   })