import {test,expect} from '@playwright/test'

test('page screenshot', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({path:'tests/Screenhsots/'+Date.now()+'HomePage.png'});
});

test('Full page screenshot', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({path:'tests/Screenhsots/'+Date.now()+'FUllpage.png', fullPage:true});
    
});

test.only('Element screenshot', async({page})=> {
     await page.goto('https://testautomationpractice.blogspot.com/');
     await page.locator('(//button)[4]').screenshot({path:'tests/Screenhsots/'+Date.now()+'ElementButton.png'});
   })