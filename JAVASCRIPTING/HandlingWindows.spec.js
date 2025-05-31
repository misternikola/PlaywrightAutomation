  const{test,expect,chromium} =   require('@playwright/test');

  test('Handel pages/window', async() =>{

    const browser = await chromium.lunch();

    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allpages = context.pages();
    console.log("Number of pages "+allpages.length);
  })