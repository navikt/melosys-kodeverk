describe('Sakstyper', () => {
  const gruppe = 'sakstyper';
  describe('EU/EØS', () => {
    testKodeset('EU_EOS', 'EU/EØS', gruppe);
    testKodeverk('EU_EOS', 'EU/EØS', gruppe,0);
  });
  describe('Trygdeavtale', () => {
    testKodeset('TRYGDEAVTALE', 'Trygdeavtale', gruppe);
    testKodeverk('TRYGDEAVTALE', 'Trygdeavtale', gruppe,1);
  });
  describe('Folketrygdloven', () => {
    testKodeset('FTRL', 'Folketrygdloven', gruppe);
    testKodeverk('FTRL', 'Folketrygdloven', gruppe,2);
  });
});
