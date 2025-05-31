# Test info

- Name: test
- Location: C:\Users\NB-0358\Documents\PlaywrightAutomation\tests\Retry.spec.js:8:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true
    at C:\Users\NB-0358\Documents\PlaywrightAutomation\tests\Retry.spec.js:25:26
```

# Page snapshot

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: "#"
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome pavanol":
        - /url: "#"
    - listitem
- heading "Products" [level=2]
- table:
  - rowgroup:
    - row "Pic Title Price x":
      - cell "Pic"
      - cell "Title"
      - cell "Price"
      - cell "x"
  - rowgroup:
    - row "Nexus 6 650 Delete":
      - cell:
        - img
      - cell "Nexus 6"
      - cell "650"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "Nexus 6 650 Delete":
      - cell:
        - img
      - cell "Nexus 6"
      - cell "650"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "Nexus 6 650 Delete":
      - cell:
        - img
      - cell "Nexus 6"
      - cell "650"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
- heading "Total" [level=2]
- heading "1950" [level=3]
- button "Place Order"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store 2017
```

# Test source

```ts
   1 | // ovo je za page object model nesto pokusaj posle da ga radis
   2 | import {expect,test} from '@playwright/test'
   3 | import { LoginPage } from '../Pages/LoginPage'
   4 | import { HomePage } from '../Pages/HomePage';
   5 | import { CardPage } from '../Pages/CardPage';
   6 |
   7 |
   8 | test('test', async({page})=>{
   9 |     //Login page
  10 |     const login = new LoginPage(page);
  11 |     await login.gotoLoginPage(page);
  12 |     await login.login('pavanol','test@123');
  13 |     await page.waitForTimeout(3000);
  14 |
  15 |     //Home page
  16 |     const home = new HomePage(page);
  17 |     await home.addProducttocart("Nexus 6");
  18 |     await page.waitForTimeout(3000);
  19 |     await home.gotocart();
  20 |
  21 |     //Card page
  22 |     const card = new CardPage(page);
  23 |     await page.waitForTimeout(3000);
  24 |     const status = await card.checkProductInCard('Nexus 6');
> 25 |     expect(await status).toBe(false); 
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  26 | })
```