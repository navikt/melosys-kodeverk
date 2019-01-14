describe('Finansiering', () => {
  const gruppe = 'finansiering';
  describe('Lånekassen', () => {
    testKodeMap('LAANEKASSEN', 'Lånekassen', gruppe);
    testKodeverk('LAANEKASSEN', 'Lånekassen', gruppe,0);
  });
  describe('Utenlandsk institusjon', () => {
    testKodeMap('UTENLANDSK_INSTITUSJON', 'Utenlandsk institusjon', gruppe);
    testKodeverk('UTENLANDSK_INSTITUSJON', 'Utenlandsk institusjon', gruppe,1);
  });
  describe('Egne midler / arv / etc', () => {
    testKodeMap('EGNE_MIDLER', 'Egne midler / arv / etc', gruppe);
    testKodeverk('EGNE_MIDLER', 'Egne midler / arv / etc', gruppe,2);
  });
});
