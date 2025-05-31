  const{test,expect,chromium} =   require('@playwright/test');

  test('Handel pages/window', async() =>{

  //  const browser = await chromium.launch();

    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allpages = context.pages();
    console.log("Number of pages "+allpages.length);

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle("OrangeHRM");
    
    await page2.goto('https://orangehrm.com/')
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ");


  })

   test.only('Handel Multiple pages/window', async() =>{

    const browser = await chromium.launch();

    const context = await browser.newContext();

    const page1 = await context.newPage();
 
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle("OrangeHRM");
    
    const pagePromise = context.waitForEvent('page');
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ");
    
    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

  })