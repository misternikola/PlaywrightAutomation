const {test,expect}= require('@playwright/test')

// repeat again, something about java home not working properly
// now it is workign fine, it must be when i was doing something with the playwright.config.js file for reports
test('handle inputbox', async ({page})=> {
    await page.goto('https://demoqa.com/automation-practice-form');

    await expect(await page.locator("//input[@id='firstName']")).toBeVisible();
    await expect(await page.locator("//input[@id='firstName']")).toBeEmpty();
    await expect(await page.locator("//input[@id='firstName']")).toBeEditable();
    await expect(await page.locator("//input[@id='firstName']")).toBeEnabled();

    await page.locator("//input[@id='firstName']").fill("John");

    await page.waitForTimeout(5000);
})