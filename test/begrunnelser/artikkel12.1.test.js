describe('Artikkel 12_1', () => {
  const gruppe = 'begrunnelser.artikkel12_1';
  describe('Arbeidsgiver har ikke vesentlig virksomhet.', () => {
    testKodeMap('IKKE_VESENTLIGVIRKSOMHET', 'Arbeidsgiver har ikke vesentlig virksomhet.', gruppe);
    testKodeverk('IKKE_VESENTLIGVIRKSOMHET', 'Arbeidsgiver har ikke vesentlig virksomhet.', gruppe,0);
  });
  describe('Varighet utsendelse overskrider fastsatt lengden i forordningen.', () => {
    testKodeMap('UTSENDELSE_FOR_LANG', 'Varighet utsendelse overskrider fastsatt lengden i forordningen.', gruppe);
    testKodeverk('UTSENDELSE_FOR_LANG', 'Varighet utsendelse overskrider fastsatt lengden i forordningen.', gruppe,1);
  });
  describe('Arbeidstaker erstatter en annen utsendt arbeidstaker.', () => {
    testKodeMap('ERSTATTER_ANNEN', 'Arbeidstaker erstatter en annen utsendt arbeidstaker.', gruppe);
    testKodeverk('ERSTATTER_ANNEN', 'Arbeidstaker erstatter en annen utsendt arbeidstaker.', gruppe,2);
  });
});
