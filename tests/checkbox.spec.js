  const {test,expect} = require('@playwright/test')

  test("Handle checkbox", async({page})=>{

    await page.goto('https://demo.nopcommerce.com/shoes?viewmode=grid&orderby=0&pagesize=6&price=0-10000');

    await page.locator("//input[@type='checkbox' and @id='attribute-option-14']").check();

    expect(await page.locator("//input[@type='checkbox' and @id='attribute-option-14']")).toBeChecked();
    expect(await page.locator("//input[@type='checkbox' and @id='attribute-option-14']").isChecked()).toBeTruthy();

    expect(await page.locator("//input[@type='checkbox' and @id='attribute-option-15']").isChecked()).toBeFalsy();

    // vise checkboxova
    const checkboxes=[
                      "//input[@type='checkbox' and @id='attribute-option-14']",
                      "//input[@type='checkbox' and @id='attribute-option-15']",
                      "//input[@type='checkbox' and @id='attribute-option-16']"     
    ]

    for(const locator of checkboxes){
        await page.locator(locator).check();
    }

    for(const locator of checkboxes){
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck();
        }
    }

    await page.waitForTimeout(5000);
  })