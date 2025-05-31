//  const{test,expect} = require('@playwright/test')
import {test,expect} from '@playwright/test';

test('Locators', async ({page}) => {

    await page.goto("https://demoblaze.com/");

    await page.click('id=login2');

    await page.locator('#loginusername').fill("pavanol");

    await page.locator('#loginpassword').fill("test@123");

    await page.locator('//button[@onclick="logIn()"]');

    await page.click('//button[@onclick="logIn()"]');

    const logoutlink = await page.locator('//a[@id="logout2"]');

    await expect(logoutlink).toBeVisible();

    
})
