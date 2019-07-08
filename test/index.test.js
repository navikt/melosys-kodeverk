const Transform  = require('../module/transform');

describe('kodeverk2KodeSet', () => {
  it('returnerer et tomt kodeset gitt et tomt kodeverk', () => {
    expect(Transform.kodeverk2KodeSet({})).to.eql({});
  });

  it('returnerer et objekt hvor key`ene er koder, og verdiene deres er koder', () => {
    const input = { henleggelsesgrunner: [ { kode: 'test', term: 'term' } ] };
    const output = Transform.kodeverk2KodeSet(input);
    expect(output.henleggelsesgrunner.test).to.exist;
    expect(output.henleggelsesgrunner.test).to.equal('test');
  });
});

describe('kodeverk2KodeMap', () => {
  it('returnerer et tomt kodemap gitt et tomt kodeverk', () => {
    expect(Transform.kodeverk2KodeMap({})).to.eql({});
  });

  it('returnerer et objekt hvor key`ene er koder, og verdiene deres er termer', () => {
    const input = { henleggelsesgrunner: [ { kode: 'test', term: 'term' } ] };
    const output = Transform.kodeverk2KodeMap(input);
    expect(output.henleggelsesgrunner.test).to.exist;
    expect(output.henleggelsesgrunner.test).to.equal('term');
  });
});
