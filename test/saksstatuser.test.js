describe('Saksstatuser', () => {
  const gruppe = 'saksstatuser';
  describe('Saken har blitt opprettet', () => {
    testKodeset('OPPRETTET', 'Saken har blitt opprettet', gruppe);
    testKodeverk('OPPRETTET', 'Saken har blitt opprettet', gruppe,0);
  });
  describe('Lovvalget er avklart', () => {
    testKodeset('LOVVALG_AVKLART', 'Lovvalget er avklart', gruppe);
    testKodeverk('LOVVALG_AVKLART', 'Lovvalget er avklart', gruppe,1);
  });
  describe('Saken er avsluttet', () => {
    testKodeset('AVSLUTTET', 'Saken er avsluttet', gruppe);
    testKodeverk('AVSLUTTET', 'Saken er avsluttet', gruppe,2);
  });
  describe('Saken er henlagt', () => {
    testKodeset('HENLAGT', 'Saken er henlagt', gruppe);
    testKodeverk('HENLAGT', 'Saken er henlagt', gruppe,3);
  });
});
