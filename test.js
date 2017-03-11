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
  it('should equal $6199.81', () => {
    expect(price.pricer(5432.00, 1, 'drugs')).to.equal('Output: $6199.81');
  });
  it('should equal $6199.88', () => {
    expect(price.pricer(12456.95, 4, 'books')).to.equal('Output: $13707.63');
  });
});
