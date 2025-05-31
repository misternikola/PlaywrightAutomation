   const {test,expect} = require('@playwright/test')

   test('test1', async({page})=> {
    console.log('test 1');
   })

    test.only('test2', async({page})=> {
    console.log('test 2');
   })