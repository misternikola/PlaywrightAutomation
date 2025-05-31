 const{test, expect}  =  require('@playwright/test')

 
 test('Alert with ok', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

   page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.click('//button[@id="alertBtn"]'); 
 //   page.waitForTimeout(5000);
 
     
 } )