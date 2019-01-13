describe('Mottaksretning', () => {
  const gruppe = 'mottaksretning';
  describe('Inngående dokument', () => {
    testKodeset('INN', 'Inngående dokument', gruppe);
    testKodeverk('INN', 'Inngående dokument', gruppe,0);
  });
  describe('Utgående dokument', () => {
    testKodeset('UT', 'Utgående dokument', gruppe);
    testKodeverk('UT', 'Utgående dokument', gruppe,1);
  });
  describe('Internt notat', () => {
    testKodeset('NOTAT', 'Internt notat', gruppe);
    testKodeverk('NOTAT', 'Internt notat', gruppe,2);
  });
});
