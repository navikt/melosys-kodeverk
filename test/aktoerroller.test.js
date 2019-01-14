describe('Aktoerroller', () => {
  const gruppe = 'aktoerroller';
  describe('Bruker', () => {
    testKodeMap('BRUKER', 'Bruker', gruppe);
    testKodeverk('BRUKER', 'Bruker', gruppe,0);
  });
  describe('Arbeidsgiver', () => {
    testKodeMap('ARBEIDSGIVER', 'Arbeidsgiver', gruppe);
    testKodeverk('ARBEIDSGIVER', 'Arbeidsgiver', gruppe,1);
  });
  describe('Fullmektig', () => {
    testKodeMap('REPRESENTANT', 'Fullmektig', gruppe);
    testKodeverk('REPRESENTANT', 'Fullmektig', gruppe,2);
  });
  describe('Trygdemyndighet', () => {
    testKodeMap('MYNDIGHET', 'Trygdemyndighet', gruppe);
    testKodeverk('MYNDIGHET', 'Trygdemyndighet', gruppe,3);
  });
});
