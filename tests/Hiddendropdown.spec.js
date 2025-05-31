  const{test,expect} = require('@playwright/test')

  test('Hidden elements', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click();
    
    await page.locator("(//div[@class='oxd-select-text oxd-select-text--active'])[3]").click();

    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span");

    for(let option of options){
        const jobtitle = await option.textContent();
        console.log(jobtitle);
        if(jobtitle.includes('QA Engineer')){
            await option.click();
            console.log("clicked "+jobtitle);
            break;
        }
    }

    await page.waitForTimeout(3000);
  })