/* global before, after, browser */

const puppeteer = require('puppeteer');
const { expect } = require('chai');
const _ = require('lodash');

const globalVariables = _.pick(global, ['browser', 'expect']);

const opts = {
  headless: false,
  slowMo: 100,
  timeout: 15000,
};

console.log('Please make sure that you are running the dev server on the port 3000 (yarn dev)');

before(async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

after(() => {
  browser.close();
  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
});
