   const {test,expect} =  require('@playwright/test')

   test('nested frame', async ({page}) =>{
    await page.goto('https://demoqa.com/nestedframes');

    const frame3 = await page.frame({url: '<p>Child Iframe</p>https://the-internet.herokuapp.com/frame_middle'});
   })