const fs = require('fs');
const expect = require('chai').expect;
const price = require('./index.js');

describe('Does my index.js file exist', () => {
  it('should exist', () => {
    expect(fs.readFileSync('./index.js')).to.exist;
  });
});

// test module.exports function
describe('Correct total made', () => {
  it('should equal $1591.58', () => {
      expect(price.pricer(1299.99, 3, 'food')).to.equal('Output: $1591.58');
  });
});
