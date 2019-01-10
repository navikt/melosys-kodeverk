const testKodeset = (kode, term, gruppe) => {
  it('kodeset: kode og term er korrekt', () => {
    assert.equal(kodeset[gruppe][kode], term);
  });
};

const testKodeverk = (kode, term, gruppe, index) => {
  it('kodeverk: kode og term er korrekt', () => {
    assert.equal(kodeverk[gruppe][index].kode, kode);
    assert.equal(kodeverk[gruppe][index].term, term);
  });
};

module.exports.testKodeset = testKodeset;
module.exports.testKodeverk = testKodeverk;
