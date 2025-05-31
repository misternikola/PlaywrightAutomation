const {test,expect} = require('@playwright/test');

test('Autosuggest dropdown', async ({page}) => {
    await page.goto('https://www.redbus.in/');

    const sourceInput = page.locator('#src');
    await sourceInput.fill('Delhi');

    const dropdownOption = page.locator('li.sc-iwsKbI div');
    await dropdownOption.first().waitFor({ state: 'visible'});

    const suggestions = await page.locator('li.sc-iwsKbI div').all();

    for(const option of suggestions){
        const value = await option.textContent();
        console.log(value);
        if(value.includes('Badarpur Delhi')){
            console.log("clicked state is "+value);
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(3000);
})