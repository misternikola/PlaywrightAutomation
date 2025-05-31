# Test info

- Name: test7
- Location: C:\Users\NB-0358\Documents\PlaywrightAutomation\tests\Annotations.spec.js:41:1

# Error details

```
Error: page.goto: Test timeout of 1000ms exceeded.
Call log:
  - navigating to "https://www.demoblaze.com/index.html", waiting until "load"

    at C:\Users\NB-0358\Documents\PlaywrightAutomation\tests\Annotations.spec.js:43:15
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
```

# Test source

```ts
   1 |    const {test,expect} = require('@playwright/test')
   2 |
   3 |  /*  test.only('test1', async({page})=> {
   4 |     console.log('test 1');
   5 |    })
   6 |
   7 |     test.skip('test2', async({page})=> {
   8 |     console.log('test 2');
   9 |    })*/
  10 |
  11 |     /*
  12 |     test.skip('test3', async({page, browserName})=> {
  13 |     console.log('test 3');
  14 |      if(browserName === 'firefox'){
  15 |       test.skip();
  16 |      }
  17 |    }) */     //something not working properly , test it out 
  18 |
  19 |    //Fix me
  20 |   /* test('test4', async({page})=>{
  21 |           test.fixme()
  22 |           console.log('this is test 4')
  23 |    }) */
  24 |
  25 |    // FAil 
  26 | /*test('test5', async({page})=> {
  27 |     test.fail();
  28 |     console.log('test 5');
  29 |     expect(1).toBe(2);
  30 |    })  */
  31 |
  32 |     /*
  33 | test('test6', async({page, browserName})=> {
  34 |    console.log('test 6');
  35 |    if(browserName === 'firefox'){
  36 |     test.fail();
  37 |    }
  38 |    })    */
  39 |
  40 |    // Slow
  41 | test('test7', async({page, browserName})=> {
  42 |    console.log('test 7');
> 43 |    await page.goto('https://www.demoblaze.com/index.html')
     |               ^ Error: page.goto: Test timeout of 1000ms exceeded.
  44 |    })   
```