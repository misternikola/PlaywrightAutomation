  const{test,expect} =  require('@playwright/test')

  test('Drag and drop', async({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const rome=page.locator('#box6');

    const italy=page.locator('#box106');

    //One solution
    /*
    await rome.hover();
    await page.mouse.down();

    await italy.hover();
    await page.mouse.down();

    await page.waitForTimeout(5000);
    */

    rome.dragTo(italy);
    await page.waitForTimeout(5000);
  })