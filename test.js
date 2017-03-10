const fs = require('fs');
const expect = require('chai').expect;
const index = require('./index.js');

describe('Does my index.js file exist', () => {
  it('should exist', () => {
    expect(fs.readFileSync('./index.js')).to.exist;
  });
});

// test module.exports function
