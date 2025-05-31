 const{test,expect} = require('@playwright/test')

 test("Handle dropdown", async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/gift-cards');

    // used by label
    // await page.locator("#products-orderby").selectOption({label:'Name: A to Z'});

    //await page.locator("#products-orderby").selectOption('Name: A to Z');

    // select by value
    // await page.locator("#products-orderby").selectOption({value:'5'});

    // Select by index
    //await page.locator("#products-orderby").selectOption({index:2});

    // Select by text
    //await page.selectOption("#products-orderby",'Name: Z to A');

    // number of options
    // const options = await page.$$('#products-orderby option');
    // console.log("Number of options", options.length);
    
    // assertation
    // await expect(options.length).toBe(6);
    
    //const content = await page.locator('#products-orderby').textContent();
    // await expect(content.includes('Name: A to Z')).toBeTruthy();

    //Every value will be written out from the dropdown
    /*
      const options = await page.$$('#products-orderby option');
      let status=false;
      
      for(const option of options){
      console.log(await option.textContent())
      let value = await option.textContent();
      if(value.includes('Price: Low to High')){
        status=true;
        break;
      }
      }

      expect(status).toBeTruthy();
    */

    const options = await page.$$('#products-orderby option');
    
    for(const option of options){
        console.log(await option.textContent())
        let value = await option.textContent();
        if(value.includes('Price: Low to High')){
            await page.selectOption("#products-orderby",value);
            break;
        }
    }

    await page.waitForTimeout(5000);
})