const fs = require('fs');
const { exec } = require('child_process');

const rootPaths = [
  './test/desktop',
  './test/mobile',
];

const files = rootPaths.map(path => fs.readdirSync(path).map(fileName => `${path}/${fileName}`)).reduce((prev, curr) => prev.concat(curr), []).filter(file => file.endsWith('.spec.js'));

const allChildProc = [];

const execPromise = file => new Promise((resolve, reject) => {
  const childProc = exec(`mocha ${file} --timeout 1000000`, (err, out) => {
    if (err) return reject(err);
    return resolve(out);
  });
  allChildProc.push(childProc);
});

process.on('SIGINT', () => {
  allChildProc.forEach(proc => proc.kill());
});

let testIdx = 1;
(async () => {
  const start = Date.now();
  console.log('Begin Testing...');
  for (let test of files) {
    console.log(`Test in progress ${testIdx}/${files.length} - time elapsed ${Math.ceil((Date.now() - start)/1000)}s`);
    await execPromise(test);
    testIdx += 1;
  }
  console.log(`Testing Done - time elapsed ${Math.ceil((Date.now() - start)/1000)}s`);
})();
