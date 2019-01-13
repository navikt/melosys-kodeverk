describe('Aktoerroller', () => {
  const gruppe = 'aktoerroller';
  describe('Bruker', () => {
    testKodeset('BRUKER', 'Bruker', gruppe);
    testKodeverk('BRUKER', 'Bruker', gruppe,0);
  });
  describe('Arbeidsgiver', () => {
    testKodeset('ARBEIDSGIVER', 'Arbeidsgiver', gruppe);
    testKodeverk('ARBEIDSGIVER', 'Arbeidsgiver', gruppe,1);
  });
  describe('Fullmektig', () => {
    testKodeset('REPRESENTANT', 'Fullmektig', gruppe);
    testKodeverk('REPRESENTANT', 'Fullmektig', gruppe,2);
  });
  describe('Trygdemyndighet', () => {
    testKodeset('MYNDIGHET', 'Trygdemyndighet', gruppe);
    testKodeverk('MYNDIGHET', 'Trygdemyndighet', gruppe,3);
  });
});
