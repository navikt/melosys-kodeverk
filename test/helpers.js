const _ = require('lodash');
const testKodeMap = (kode, term, gruppe) => {
  const ks = _.at(kodemap, gruppe);
  it('kodeset: kode og term er korrekt', () => {
    assert.equal(ks[0][kode], term);
  });
};

const testKodeverk = (kode, term, gruppe, index) => {
  const kv = _.at(kodeverk, gruppe);
  it('kodeverk: kode og term er korrekt', () => {
    assert.equal(kv[0][index].kode, kode);
    assert.equal(kv[0][index].term, term);
  });
};

module.exports.testKodeMap = testKodeMap;
module.exports.testKodeverk = testKodeverk;
