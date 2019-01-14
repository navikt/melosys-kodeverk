describe('Saksstatuser', () => {
  const gruppe = 'saksstatuser';
  describe('Saken har blitt opprettet', () => {
    testKodeMap('OPPRETTET', 'Saken har blitt opprettet', gruppe);
    testKodeverk('OPPRETTET', 'Saken har blitt opprettet', gruppe,0);
  });
  describe('Lovvalget er avklart', () => {
    testKodeMap('LOVVALG_AVKLART', 'Lovvalget er avklart', gruppe);
    testKodeverk('LOVVALG_AVKLART', 'Lovvalget er avklart', gruppe,1);
  });
  describe('Saken er avsluttet', () => {
    testKodeMap('AVSLUTTET', 'Saken er avsluttet', gruppe);
    testKodeverk('AVSLUTTET', 'Saken er avsluttet', gruppe,2);
  });
  describe('Saken er henlagt', () => {
    testKodeMap('HENLAGT', 'Saken er henlagt', gruppe);
    testKodeverk('HENLAGT', 'Saken er henlagt', gruppe,3);
  });
});
