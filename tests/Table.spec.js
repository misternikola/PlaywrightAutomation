
// Pagination

const{test, expect}  =   require('@playwright/test')

test("handling table", async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

   const  columns = await table.locator('thead tr th');
   console.log("Number of columns ", await columns.count());

   const rows =await table.locator('tbody tr');
   console.log("Number of rows ", await rows.count());

   expect(await columns.count()).toBe(4);
   expect(await rows.count()).toBe(5);

   /*
  const matchedrow = rows.filter({
    has: page.locator('td'),
    hasText: 'Smartwatch'
   })
   await matchedrow.locator('input').check();
   */

   await selectProduct(rows,page,'Smartphone');
   await selectProduct(rows,page,'Tablet');
   await selectProduct(rows,page,'Wireless Earbuds');

   for(let i=0;i<await rows.count(); i++){
    const row=rows.nth(i);
    const tds = row.locator('td');
    for(let j=0; j<await tds.count() - 1; j++){
        console.log(await tds.nth(j).textContent());
    }
   }

   const pages = await page.locator('.pagination li a');
   console.log("Number of pages ", await pages.count());

   for(let p=0; p< await pages.count(); p++){
    if(p>0){
        await pages.nth(p).click();
    }
    for(let i=0;i<await rows.count(); i++){
    const row=rows.nth(i);
    const tds = row.locator('td');
    for(let j=0; j<await tds.count() - 1; j++){
        console.log(await tds.nth(j).textContent());
    }
   }
   }

   await page.waitForTimeout(5000);
})

   async function selectProduct(rows,page,name){
     const matchedrow = rows.filter({
    has: page.locator('td'),
    hasText: name
   })
   await matchedrow.locator('input').check();
   
}