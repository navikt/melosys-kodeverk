const transformKodeverk2KodeSet = require('../src/index').transformKodeverk2KodeSet;
const transformKodeverk2KodeMap = require('../src/index').transformKodeverk2KodeMap;

describe('transformKodeverk2KodeSet', () => {
  it('returnerer et tomt kodeset gitt et tomt kodeverk', () => {
    expect(transformKodeverk2KodeSet({})).to.eql({});
  });

  it('returnerer et objekt hvor key`ene er koder, og verdiene deres er koder', () => {
    const input = { henleggelsesgrunner: [ { kode: 'test', term: 'term' } ] };
    const output = transformKodeverk2KodeSet(input);
    expect(output.henleggelsesgrunner.test).to.exist;
    expect(output.henleggelsesgrunner.test).to.equal('test');
  });
});

describe('transformKodeverk2KodeMap', () => {
  it('returnerer et tomt kodemap gitt et tomt kodeverk', () => {
    expect(transformKodeverk2KodeMap({})).to.eql({});
  });

  it('returnerer et objekt hvor key`ene er koder, og verdiene deres er termer', () => {
    const input = { henleggelsesgrunner: [ { kode: 'test', term: 'term' } ] };
    const output = transformKodeverk2KodeMap(input);
    expect(output.henleggelsesgrunner.test).to.exist;
    expect(output.henleggelsesgrunner.test).to.equal('term');
  });
});
