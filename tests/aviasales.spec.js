import { test, expect } from '@playwright/test';
import { AviasalesPage } from '../Pages/AviasalesPage';
const {chromium} = require('playwright-extra');
  

test('airport test with POM', async ({ page }) => {
  const browser = await chromium.launch({ headless: false, slowMo: 200 });
  const context = await browser.newContext();
  const aviasales = new AviasalesPage(page);
  const testData = {
    from: 'New york', 
    to: 'Germany'
  };

   await page.waitForTimeout(200);

  await aviasales.goto();

  const nightMode = await aviasales.enableNightMode();
 await page.waitForTimeout(200);

  console.log('Night mode enabled:', nightMode);
  

  await aviasales.fillFromField(testData.from);
  await page.waitForTimeout(200);

  await aviasales.fillToField(testData.to);
  await page.waitForTimeout(200);

  await aviasales.selectPassengers();
  await page.waitForTimeout(200);

  await aviasales.selectDate();
  await page.waitForTimeout(200);

  const oldUrl = await aviasales.getCurrentUrl();
 const flightDataBefore = await aviasales.getFlightData();
  
  await page.waitForTimeout(200);

  console.log("data before "+flightDataBefore.from+ " "+flightDataBefore.to+" "+flightDataBefore.passengers+" "+flightDataBefore.return+" "+flightDataBefore.departure);

  

  await aviasales.submitForm();
 //  await page.waitForTimeout(3000);

  await page.waitForTimeout(9000);

// const buttonLocator = await page.locator('iframe[name="c-8s92ic9lmvpp"]').contentFrame().getByRole('button', { name: 'Get an audio challenge' });
///////const buttonLocator = await page.locator('(//iframe)[1]');
// Assert that the button is visible
if ((await aviasales.getrecaptcha()).isVisible()) {
  console.log('reCAPTCHA is present. Ending the test.');
  process.exit(1);  // Ends the process with an error code (non-zero exit code).
} else {
  console.log('reCAPTCHA is not present. Proceeding with the test.');
  // Continue with your normal test flow here
}
 
 const flightDataAfter = await aviasales.getFlightData();
  
  await page.waitForTimeout(200);

  console.log("data after "+flightDataAfter.from+ " "+flightDataAfter.to+" "+flightDataAfter.passengers+" "+flightDataAfter.return+" "+flightDataAfter.departure);

  
    
    expect(newUrl).not.toBe(oldUrl);
   expect(flightDataAfter.from).toBe(flightDataBefore.from);
    expect(flightDataAfter.to).toBe(flightDataBefore.to);
    
});