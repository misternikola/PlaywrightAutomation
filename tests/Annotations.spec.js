   const {test,expect} = require('@playwright/test')

 /*  test.only('test1', async({page})=> {
    console.log('test 1');
   })

    test.skip('test2', async({page})=> {
    console.log('test 2');
   })*/

    /*
    test.skip('test3', async({page, browserName})=> {
    console.log('test 3');
     if(browserName === 'firefox'){
      test.skip();
     }
   }) */     //something not working properly , test it out 

   //Fix me
  /* test('test4', async({page})=>{
          test.fixme()
          console.log('this is test 4')
   }) */

   // FAil 
/*test('test5', async({page})=> {
    test.fail();
    console.log('test 5');
    expect(1).toBe(2);
   })  */

    /*
test('test6', async({page, browserName})=> {
   console.log('test 6');
   if(browserName === 'firefox'){
    test.fail();
   }
   })    */

   // Slow
test('test7', async({page, browserName})=> {
  // test.slow();
   test.setTimeout(5000);
   await page.goto('https://www.demoblaze.com/index.html')
    console.log('test 7');
   })   