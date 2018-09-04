/* global describe, before, after, it, browser */
const { expect } = require('chai');

describe('Home page test', () => {
  let page;

  before(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  after(async () => {
    await page.close();
  });

  it('should have the correct page title', async () => {
    expect(await page.title()).to.eql('Home - Movie Ticket');
  });

  it('should have the correct heading', async () => {
    await page.waitFor('h1');
    const heading = await page.$eval('h1', el => el.innerText);
    expect(heading).to.eql('Our Movies');
  });

  it('should have 6 cards', async () => {
    const length = await page.$eval('[data-test-tag="row-scroll"]', el => el.children.length);
    expect(length).to.eql(6);
  });

  it('cast must render correct title', async () => {
    const title = await page.$eval('[data-test-tag="card-title"]', el => el.innerText);
    expect(title).to.eql('Avenger: Infinitywar');
  });
});
