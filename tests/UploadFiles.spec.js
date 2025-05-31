   import {test, expect} from '@playwright/test'

   // do it again
   // Wrong path , you need to put the file in the path of execution

   test('Single File', async ({page}) => {
    //should i use this link ?

   await page.goto('https://commitquality.com/practice-file-upload');

   const handle = page.locator('input[type="file');
   await handle.setInputFiles('test.jpg');
   // problem here , wont upload file

   page.once("dialog", (dialog) => {
      console.log(dialog.message());
      dialog.accept();
   })

   await page.getByText("Submit").click();

   await page.waitForTimeout(5000);
   })

   /*
   test('Multiple Files', async({page}) => {


   })
    */