describe('Landkoder', () => {
  const gruppe = 'landkoder';
  describe('Sveits', () => {
    testKodeset('CH', 'Sveits', gruppe);
    testKodeverk('CH', 'Sveits', gruppe, 0);
  });
});
