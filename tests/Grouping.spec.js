import {test, expect} from '@playwright/test'

test.beforeAll(async() =>{
    console.log('this is before All Hook')
})

test.afterAll(async() =>{
    console.log('this is after All Hook')
})

test.beforeEach(async() =>{
    console.log('this is before each All Hook')
})

test.afterEach(async() =>{
    console.log('this is after each All Hook')
})


test.describe('Group 1',() => { 
test('Test1', async({page}) => {
    console.log("test 1");
})

test.skip('Test2', async({page}) => {
    console.log("test 2");
})

})

test.describe('Group 2',() => { 
test('Test3', async({page}) => {
    console.log("test 3");
})

test('Test4', async({page}) => {
    console.log("test 4");
})
})



