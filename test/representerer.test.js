describe('Representerer', () => {
  const gruppe = 'representerer';
  describe('Representerer bruker', () => {
    testKodeMap('BRUKER', 'Representerer bruker', gruppe);
    testKodeverk('BRUKER', 'Representerer bruker', gruppe,0);
  });
  describe('Representerer arbeidsgiver', () => {
    testKodeMap('ARBEIDSGIVER', 'Representerer arbeidsgiver', gruppe);
    testKodeverk('ARBEIDSGIVER', 'Representerer arbeidsgiver', gruppe,1);
  });
  describe('Representerer bruker og arbeidsgiver', () => {
    testKodeMap('BEGGE', 'Representerer bruker og arbeidsgiver', gruppe);
    testKodeverk('BEGGE', 'Representerer bruker og arbeidsgiver', gruppe,2);
  });
});
