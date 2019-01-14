describe('Landkoder', () => {
  const gruppe = 'landkoder';
  describe('Sveits', () => {
    testKodeMap('CH', 'Sveits', gruppe);
    testKodeverk('CH', 'Sveits', gruppe, 0);
  });
});
