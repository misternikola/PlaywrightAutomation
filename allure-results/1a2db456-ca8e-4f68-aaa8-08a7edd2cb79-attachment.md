# Test info

- Name: Home page test
- Location: C:\Users\NB-0358\Documents\PlaywrightAutomation\tests\Hooks.spec.js:3:5

# Error details

```
Error: expect(received).toHaveLength(expected)

Expected length: 9
Received length: 0
Received array:  []
    at C:\Users\NB-0358\Documents\PlaywrightAutomation\tests\Hooks.spec.js:13:20
```

# Page snapshot

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: pavanol
    - text: "Password:"
    - textbox: test@123
    - button "Close"
    - button "Log in"
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
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
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
   1 | import {test,expect} from '@playwright/test'
   2 |
   3 | test('Home page test', async ({page}) => {
   4 |
   5 |     await page.goto('https://www.demoblaze.com/index.html')
   6 |  //Login
   7 |     await page.locator('#login2').click();
   8 |     await page.locator('#loginusername').fill('pavanol');
   9 |     await page.locator('#loginpassword').fill('test@123');
  10 |     await page.locator('//button[normalize-space()="Log in"]').click();  
  11 |  //Home page
  12 |   const products =  await page.$$('.hrefch');
> 13 |   expect(products).toHaveLength(9); 
     |                    ^ Error: expect(received).toHaveLength(expected)
  14 |  //Logout
  15 |  await page.locator('#logout2').click();
  16 |
  17 | });
  18 |
  19 | test('Add product to cart', async ({page}) => {
  20 | await page.goto('https://www.demoblaze.com/index.html')
  21 |  //Login
  22 |     await page.locator('#login2').click();
  23 |     await page.locator('#loginusername').fill('pavanol');
  24 |     await page.locator('#loginpassword').fill('test@123');
  25 |     await page.locator('//button[normalize-space()="Log in"]').click();  
  26 |   //Add product to cart
  27 | await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
  28 | await page.locator('//a[normalize-space()="Add to cart"]').click();
  29 |
  30 | page.on('dialog', async dialog => {
  31 |     expect(dialog.message()).toContain('Product added.')
  32 |     await dialog.accept() 
  33 | }) 
  34 |   //Logout
  35 | await page.locator('#logout2').click();
  36 | });
  37 |
  38 |
```