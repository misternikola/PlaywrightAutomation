const{test,expect} = require('@playwright/test')

// do it again it is not working properly
// only works if you put "@sanity" wont work with out " "

test('test1@sanity',async({page})=>{
   console.log('this is test1 ')
})

test('test2@sanity',async({page})=>{
   console.log('this is test2 ')
})

test('test3@reg',async({page})=>{
   console.log('this is test3 ')
})

test('test4@reg',async({page})=>{
   console.log('this is test4 ')
})

test('test5@sanity@reg',async({page})=>{
   console.log('this is test5 ')
})