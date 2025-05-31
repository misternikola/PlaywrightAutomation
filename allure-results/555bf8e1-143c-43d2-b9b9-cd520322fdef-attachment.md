# Test info

- Name: Create user
- Location: C:\Users\NB-0358\Documents\PlaywrightAutomation\tests\APITests.spec.js:11:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 401
    at C:\Users\NB-0358\Documents\PlaywrightAutomation\tests\APITests.spec.js:22:31
```

# Test source

```ts
   1 |    const{test,expect} =  require('@playwright/test')
   2 |
   3 |    var Userid;
   4 |
   5 |    test("Get user", async({request}) => {
   6 |    const response = await request.get('https://reqres.in/api/users?page=2');
   7 |    console.log(await response.json());
   8 |   expect(response.status()).toBe(200);
   9 |    })
  10 |
  11 |    test.only("Create user", async({request}) => {
  12 |       const response= await request.post('https://reqres.in/api/users', {
  13 |                 data:{
  14 |                     "name":"john",
  15 |                     "job":"chachkolj"
  16 |                 },
  17 |                 headers:{
  18 |                     "Accept":"application/json"
  19 |                 }
  20 |             });
  21 |     console.log(await response.json());
> 22 |     expect(response.status()).toBe(201);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  23 |
  24 |     var res = await response.json();
  25 |     Userid=res.id
  26 |    })
  27 |
  28 |    test("Update user", async({page}) => {
  29 |
  30 |    })
  31 |
  32 |    test("Delete user", async({page}) => {
  33 |
  34 |    })
```