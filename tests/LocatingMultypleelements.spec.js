 const {test,expect} =  require('@playwright/test')

 test('LocateMultypleElements', async ({page}) => {

    await page.goto('https://demoblaze.com/');

    /*
     const links= await page.$$('a');

     for(const link of links){
        const linktext = await link.textContent();
        console.log(linktext);        
     }
    */

   /*
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for (const product of products){
    const prodName = await prodcut.textContent();   
    console.log(prodName); 
    }
   */

    await page.waitForSelector('xpath=//div[@id="tbodyid"]//div//h4/a');

    const products = await page.$$('xpath=//div[@id="tbodyid"]//div//h4/a');

    for(const product of products){
       const prodName = await product.textContent();
       console.log(prodName.trim());
    }

   /*
      const products = await page.$$('xpath=//div[@id="tbodyid"]//div//h4/a');

      for (const product of products){
      const productName = await product.textContent();
      const productHref = await product.getAttribute('href');
      //console.log(`Name: ${productName.trim()}, Link: ${productHref}`);
      console.log(`Name: ${productName.trim()}`);
      }
   */

 })