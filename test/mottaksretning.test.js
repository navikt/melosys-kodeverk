describe('Mottaksretning', () => {
  const gruppe = 'mottaksretning';
  describe('Inngående dokument', () => {
    testKodeMap('INN', 'Inngående dokument', gruppe);
    testKodeverk('INN', 'Inngående dokument', gruppe,0);
  });
  describe('Utgående dokument', () => {
    testKodeMap('UT', 'Utgående dokument', gruppe);
    testKodeverk('UT', 'Utgående dokument', gruppe,1);
  });
  describe('Internt notat', () => {
    testKodeMap('NOTAT', 'Internt notat', gruppe);
    testKodeverk('NOTAT', 'Internt notat', gruppe,2);
  });
});
