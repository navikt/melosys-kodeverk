describe('Kodeverk', () => {
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
