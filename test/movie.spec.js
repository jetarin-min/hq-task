/* global describe, before, after, it, browser */
const { expect } = require('chai');

describe('Movie detail page test', () => {
  let page;

  before(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/movie/1');
  });

  after(async () => {
    await page.close();
  });

  it('should have the correct page title', async () => {
    expect(await page.title()).to.eql('Avenger: Infinitywar - Movie Ticket');
  });

  it('should have the correct heading', async () => {
    const selector = 'h1';
    await page.waitFor(selector);
    const heading = await page.$eval(selector, el => el.innerText);
    expect(heading).to.eql('Avenger: Infinitywar');
  });

  it('should show the correct purchase button', async () => {
    const selector = '[data-test-tag="purchase-button"]';
    await page.waitFor(selector);
    const button = await page.$eval(selector, el => el.innerText);
    expect(button).to.eql('Normal Seat - 12 USD');
  });

  it('should show loading while purchasing', async () => {
    const selector = '[data-test-tag="purchase-button"]';
    const loadingSelector = '[data-test-tag="movie-info-spinner"]';
    await page.waitFor(selector);
    await Promise.all([
      page.waitFor(selector, { hidden: true, timeout: 4000 }),
      page.click(selector),
    ]);
    await page.waitFor(loadingSelector, { timeout: 1000 });
    const loading = await page.$eval(loadingSelector, el => el.outerHTML);
    expect(loading).to.exist;
  });

  it('should show toast after purchased', async () => {
    const selector = '[data-test-tag="purchase-button"]';
    const toastSelector = '[data-test-tag="toast-message"]';
    await page.waitFor(selector);
    await page.click(selector);
    await page.waitFor(toastSelector, { timeout: 4000, visible: true });
    const toast = await page.$eval(toastSelector, el => el.innerText);
    expect(toast).to.eql('Normal Seat has been purchased (12 USD)');
  });
});
