 const{test, expect}  =  require('@playwright/test')

 
 test.skip('Alert with ok', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

   page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.click('//button[@id="alertBtn"]'); 
       
 } )

  test('Confirmation Dialog with OK and Cancel', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
 
        page.on('dialog', async dialog =>{        
       expect(dialog.type()).toContain('confirm')
       //  page.waitForTimeout(2000);

     //   await page.locator("//button[@id='confirmBtn']").click();
        expect(dialog.message()).toContain('Press a button!');
     
 
       await dialog.dismiss();
    })

   // await page.locator("//button[@id='confirmBtn']").click();

   //button[normalize-space()='Confirmation Alert']
   await page.click('//button[normalize-space()="Confirmation Alert"]');

  // await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
  await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')
 
 } )

  test('Alert Prompt', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
 
       page.on('dialog', async dialog =>{        
       expect(dialog.type()).toContain('prompt');
       expect(dialog.message()).toContain('Please enter your name:');
       expect(dialog.defaultValue()).toContain('Harry Potter');

       await dialog.accept('John');
    })
   
   await page.click('//button[normalize-space()="Prompt Alert"]');
 
   await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?');
 })