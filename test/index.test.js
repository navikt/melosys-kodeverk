var assert = require('chai').assert;

const Kodeverk = require('../src');

describe('Kodeverk', () => {
  const kodeverk = Kodeverk.kodeverk;
  const kodeset = Kodeverk.kodeset;
  describe('Kode/Term', () => {
    it('landkoder', () => {
      assert.equal(kodeverk.landkoder[0].kode,'CH');
    });
  });
  describe('kodeset', () => {
    it('landkoder', () => {
      assert.equal(kodeset.landkoder.CH, 'Sveits');
    });
  });
});
