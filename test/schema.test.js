var assert = require('chai').assert;
const schema = require('../scripts/schem');

describe('Schema', () => {
  it('Validate kodveverk skjema', ()=> {
    const valid = schema.test();
    assert.equal(valid, true, 'Invalid schema');
  });
});