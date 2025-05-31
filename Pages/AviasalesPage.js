import { expect } from '@playwright/test'; // Ensure expect is imported

export class AviasalesPage {
  /**
   * @param {import('@playwright/test').Page} page 
   */
  
  constructor(page) {
    this.page = page;
    this.fromInput = page.locator('(//input[@data-test-id])[1]');
    this.toInput = page.locator('[data-test-id="destination-input"]');
    this.passengerField = page.locator('[data-test-id="passengers-field"]');
    this.adultIncreaseButton = page.locator('[data-test-id="number-of-adults"] [data-test-id="increase-button"]');
    this.startDateField = page.locator('[data-test-id="start-date-field"]');
    this.nightModeToggle = page.locator('(//span)[4]');
    this.tooltipButton = page.locator('[data-test-id="tooltip-wrapper"] [data-test-id="button"]');
    this.submitButton = page.locator("//button[@data-test-id='form-submit']");
    this.calendarConfirm = page.locator('[data-test-id="calendar-action-button"]');
     this.buttonLocator = page.locator('(//iframe)[1]')
  }

  async goto() {
    await this.page.goto('https://www.aviasales.com/?params=INI1');
  }

  async enableNightMode() {
    await this.nightModeToggle.click();
    return this.page.evaluate(() =>
      document.documentElement.className.includes('--night')
    );
  }

  async fillFromField(value) {
    await this.fromInput.click({ clickCount: 3 });
    await this.fromInput.press('Backspace');
    await this.fromInput.fill(value);
    await this.fromInput.press('ArrowDown');
    await this.fromInput.press('ArrowDown');
    await this.page.getByText('John F. Kennedy International').click();
    await this.fromInput.press('Enter');
  }

  async fillToField(value) {
   /* await this.toInput.click({ clickCount: 3 });
    await this.toInput.press('Backspace');
    */
    await this.toInput.fill(value);
    /*await this.toInput.press('ArrowDown');
    await this.toInput.press('Enter');*/
    const cityOption = this.page.locator(`[data-test-id="suggested-city-BER"]`);
    await cityOption.waitFor({ state: 'visible' });
    await cityOption.click();
  }

  async selectDate() {
    await this.startDateField.click();
    await this.tooltipButton.click();
    await this.tooltipButton.click();
    await this.page.locator("//div[@aria-label='Sat Aug 30 2025']").click();
    await this.calendarConfirm.click();
  }

  async selectPassengers() {
    await this.passengerField.click();
    await this.adultIncreaseButton.click();
  }

  async getFlightData() {
    // Wait for the necessary elements to load
    await this.page.waitForSelector('[data-test-id="passenger-numbers"]');
    await this.page.waitForSelector('[data-test-id="start-date-value"]');
    await this.page.waitForSelector('[data-test-id="end-date-value"]');
    
    // Extract the data
    const from = await this.fromInput.inputValue();
    const to = await this.toInput.inputValue();
    
    const passengers = await this.page.locator('[data-test-id="passenger-numbers"]').textContent();
    const departure = await this.page.locator('[data-test-id="start-date-value"]').textContent();
    const returnDate = await this.page.locator('[data-test-id="end-date-value"]').textContent();
    
    /*
    console.log('From:', from);
    console.log('To:', to);
    console.log('Passengers:', passengers);
    console.log('Departure:', departure);
    console.log('Return Date:', returnDate);
    */
    
    // Return the extracted data
    return { from, to, passengers, departure, return: returnDate };
}

  
  async getFlightData() {
    const from = await this.fromInput.inputValue();
    const to = await this.toInput.inputValue();
    const passengers = await this.page.locator('[data-test-id="passenger-numbers"]').innerText();
    const departure = await this.page.locator('[data-test-id="start-date-value"]').innerText();
    const returnDate = await this.page.locator('[data-test-id="end-date-value"]').innerText();

    return { from, to, passengers, departure, return: returnDate };
  }
    
  async submitForm() {
    await this.submitButton.hover();
    await this.page.waitForTimeout(1000);
    await Promise.all([
      this.page.waitForLoadState(),
      this.submitButton.click()
    ]);
  }

  async getCurrentUrl() {
    return this.page.url();
  }

   async getrecaptcha() {
    return this.buttonLocator;
  }

  
}