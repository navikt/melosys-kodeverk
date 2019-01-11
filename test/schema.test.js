const schema = require('../scripts/schema');

describe('Schema', () => {
  it('Validate kodveverk skjema', () => {
    const valid = schema.test();
    assert.equal(valid, true, 'Invalid schema');
  });
});
