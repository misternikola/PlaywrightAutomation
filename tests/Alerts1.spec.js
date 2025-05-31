 const{test, expect}  =  require('@playwright/test')

 
 test('Alert with ok', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
 
        page.on('dialog', async dialog =>{        
       expect(dialog.type()).toContain('confirm')
       //  page.waitForTimeout(2000);

     //   await page.locator("//button[@id='confirmBtn']").click();
        expect(dialog.message()).toContain('Press a button!');
      //  page.waitForTimeout(2000);
 
       // await dialog.accept();
       await dialog.dismiss();
    })

   // await page.locator("//button[@id='confirmBtn']").click();

   //button[normalize-space()='Confirmation Alert']
   await page.click('//button[normalize-space()="Confirmation Alert"]');

  // await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
  await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')
 
 } )