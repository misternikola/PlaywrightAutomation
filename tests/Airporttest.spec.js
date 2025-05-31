import {test,expect} from '@playwright/test';

test('airporttest', async ({page}) => {

    await page.goto('https:/aviasales.com/?params=INI1');

    const testData = {
        from: 'New york',
        to: 'Germany'
    };

    const oldurl = page.url();
    console.log('Current URL:', oldurl);

     await page.click('(//span)[4]');   

    const hasNightMode = await page.evaluate(() => {
      return document.documentElement.className.includes('--night');
    });

    console.log('Night mode enabled:', hasNightMode);

    const fromInput = page.locator('(//input[@data-test-id])[1]');
    await page.waitForTimeout(1000);
    // click and clear value

    await fromInput.click({clickCount: 3}); //select all
    await fromInput.press('Backspace');
    await page.waitForTimeout(1000);
    await page.locator('(//input[@data-test-id])[1]').fill(testData.from);
    await page.waitForTimeout(1000);
    await page.locator('(//input[@data-test-id])[1]').press('ArrowDown');
    await page.waitForTimeout(1000);
    await page.locator('(//input[@data-test-id])[1]').press('ArrowDown');
    await page.locator('(//input[@data-test-id])[1]').press('Enter');

    const fromInput1 = page.locator('(//input[@data-test-id])[2]');
    await fromInput1.click({clickCount:3});
    await fromInput1.press('Backspace');
    await page.waitForTimeout(1000);
    await page.locator('[data-test-id="destination-input"]').fill(testData.to);
    await page.waitForTimeout(1000);
    await page.locator('(//input[@data-test-id])[2]').press('ArrowDown');
    await page.waitForTimeout(1000);
    await page.locator('(//input[@data-test-id])[2]').press('Enter');
    await page.locator('[data-test-id="start-date-field"]').click();
    await page.locator('[data-test-id="passengers-field"]').click();
    await page.locator('[data-test-id="number-of-adults"] [data-test-id="increase-button"]').click();
    await page.locator('[data-test-id="start-date-field"]').click();
    await page.locator('[data-test-id="tooltip-wrapper"] [data-test-id="button"]').click();
    await page.waitForTimeout(3000);
    await page.locator('[data-test-id="tooltip-wrapper"] [data-test-id="button"]').click();
    await page.waitForTimeout(1000);
    await page.locator("//div[@aria-label='Sat Aug 30 2025']").click();
    //no return ticket button
    await page.locator('[data-test-id="calendar-action-button"]').click();
    await page.locator("//button[@data-test-id='form-submit']").hover();
    await page.waitForTimeout(1000);

    const from1 = await page.locator('(//input[@data-test-id])[1]').inputValue();
    const to1 = await page.locator('[data-test-id="destination-input"]').inputValue();
    const passnum1 = await page.locator('//div[@data-test-id="passenger-numbers"]').innerText();
    const startdate1 = await page.locator('//div[@data-test-id="start-date-value"]').innerText();
    const return1 = await page.locator("//div[@data-test-id='end-date-value']").innerText();

    const dataArray = [from1, to1, passnum1, startdate1, return1];

    const flightData = {
        from: dataArray[0],
        to: dataArray[1],
        departure: dataArray[2],
        return: dataArray[3],
        passengers: dataArray[4]
    }

    console.log('From '+from1+' to '+to1+' passanger number '+passnum1+' startdate '+startdate1+' return '+return1);

    await Promise.all([
        page.waitForLoadState(),
        page.locator("//button[@data-test-id='form-submit']").click(),
        // await page.waitForTimeout(5000)
    ]);

    const newurl = page.url();
    console.log('New URL:', newurl);

    await expect(oldurl).not.toBe(newurl);

    const from2 = await page.locator('(//input[@data-test-id])[1]').inputValue();
    const to2 = await page.locator('[data-test-id="destination-input"]').inputValue();
    const passnum2 = await page.locator('//div[@data-test-id="passenger-numbers"]').innerText();
    const startdate2 = await page.locator('//div[@data-test-id="start-date-value"]').innerText();
    const return2 = await page.locator("//div[@data-test-id='end-date-value']").innerText();

    const dataArray2 = [from2, to2, passnum2, startdate2, return2];

    const flightData2 = {
        from: dataArray2[0],
        to: dataArray2[1],
        departure:dataArray2[2],
        return: dataArray2[3],
        passengers: dataArray2[4]
    };

    for (const key in flightData){
        await expect.soft(flightData2[key]).toBe(flightData[key]);
    }
})