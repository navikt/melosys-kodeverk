describe('Henleggelsesgrunner', () => {
  const gruppe = 'henleggelsesgrunner';
  describe('Søknad trukket', () => {
    testKodeMap('SOEKNADEN_TRUKKET', 'Søknaden er trukket', gruppe);
    testKodeverk('SOEKNADEN_TRUKKET', 'Søknaden er trukket', gruppe,0);
  });
  describe('Opphold avlyst', () => {
    testKodeMap('OPPHOLD_UTL_AVLYST', 'Utenlandsoppholdet er avlyst', gruppe);
    testKodeverk('OPPHOLD_UTL_AVLYST', 'Utenlandsoppholdet er avlyst', gruppe ,1);
  });
  describe('Annet', () => {
    testKodeMap('ANNET', 'Begrunnelse oppgis i fritekst', gruppe);
    testKodeverk('ANNET', 'Begrunnelse oppgis i fritekst', gruppe,2);
  });
});
