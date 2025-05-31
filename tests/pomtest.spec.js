import {expect,test} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage';
import { CardPage } from '../Pages/CardPage';


test('test', async({page})=>{
    //Login page
    const login = new LoginPage(page);
    await login.gotoLoginPage(page);
    await login.login('pavanol','test@123');
    await page.waitForTimeout(3000);

    //Home page
    const home = new HomePage(page);
    await home.addProducttocart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.gotocart();

    //Card page
    const card = new CardPage(page);
    await page.waitForTimeout(3000);
    const status = await card.checkProductInCard('Nexus 6');
    expect(await status).toBe(true); 
})