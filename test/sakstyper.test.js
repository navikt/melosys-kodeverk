describe('Sakstyper', () => {
  const gruppe = 'sakstyper';
  describe('EU/EØS', () => {
    testKodeMap('EU_EOS', 'EU/EØS', gruppe);
    testKodeverk('EU_EOS', 'EU/EØS', gruppe,0);
  });
  describe('Trygdeavtale', () => {
    testKodeMap('TRYGDEAVTALE', 'Trygdeavtale', gruppe);
    testKodeverk('TRYGDEAVTALE', 'Trygdeavtale', gruppe,1);
  });
  describe('Folketrygdloven', () => {
    testKodeMap('FTRL', 'Folketrygdloven', gruppe);
    testKodeverk('FTRL', 'Folketrygdloven', gruppe,2);
  });
});
