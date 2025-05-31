   const{test,expect} =  require('@playwright/test');

   test('frames', async({page})=> {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allframes = await page.frames();
    console.log("Number of frames "+allframes.length);

    //const var = await page.frame('name');   if name is present
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});

    frame1.fill('[name="mytext1"]','Hello');

    const inputbox = await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']");

    inputbox.fill("hello");

    await page.waitForTimeout(5000);
   })