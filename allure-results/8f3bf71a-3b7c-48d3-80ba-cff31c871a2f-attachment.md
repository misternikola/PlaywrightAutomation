# Test info

- Name: test2
- Location: C:\Users\NB-0358\Documents\PlaywrightAutomation\tests\Reporters.spec.js:8:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.demo.opencart.com/
Call log:
  - navigating to "https://www.demo.opencart.com/", waiting until "load"

    at C:\Users\NB-0358\Documents\PlaywrightAutomation\tests\Reporters.spec.js:9:16
```

# Page snapshot

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph: Check if there is a typo in www.demo.opencart.com.
- paragraph
- list:
  - listitem:
    - text: If spelling is correct,
    - link "try running Windows Network Diagnostics":
      - /url: javascript:diagnoseErrors()
    - text: .
- text: DNS_PROBE_FINISHED_NXDOMAIN
- button "Reload"
```

# Test source

```ts
   1 | const{test, expect} = require('@playwright/test')
   2 |
   3 | test('test1', async ({page}) =>{
   4 |     await page.goto('https://www.demoblaze.com/index.html');
   5 |     await expect(page).toHaveTitle('STORE');
   6 | })
   7 |
   8 | test('test2', async ({page}) =>{
>  9 |     await page.goto('https://www.demo.opencart.com/');
     |                ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.demo.opencart.com/
  10 |     await expect(page).toHaveTitle('Your Store');
  11 | })
  12 |
  13 | test('test3', async ({page}) =>{
  14 |     await page.goto('https://www.nopcommerce.com/');
  15 |     await expect(page).toHaveTitle('nopCommerce demo store');
  16 | })
```