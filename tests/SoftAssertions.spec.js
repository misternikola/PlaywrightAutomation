const {test, expect} =   require('@playwright/test');

test("Soft assertions", async ({page}) =>{
   await page.goto("https://demoblaze.com/index.html");

   //hard assert
   /*
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL("https://demoblaze.com/index.html");
    await expect(page.locators('.navbar-brand')).toBeVisible();
   */

    //Soft assert
    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL("https://demoblaze.com/index.html");
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
}) 

