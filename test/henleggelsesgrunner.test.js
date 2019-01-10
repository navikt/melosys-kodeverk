describe('Henleggelsesgrunner', () => {
  const gruppe = 'henleggelsesgrunner';
  describe('Søknad trukket', () => {
    testKodeset('SOEKNADEN_TRUKKET', 'Søknaden er trukket', gruppe);
    testKodeverk('SOEKNADEN_TRUKKET', 'Søknaden er trukket', gruppe,0);
  });
  describe('Opphold avlyst', () => {
    testKodeset('OPPHOLD_UTL_AVLYST', 'Utenlandsoppholdet er avlyst', gruppe);
    testKodeverk('OPPHOLD_UTL_AVLYST', 'Utenlandsoppholdet er avlyst', gruppe ,1);
  });
  describe('Annet', () => {
    testKodeset('ANNET', 'Begrunnelse oppgis i fritekst', gruppe);
    testKodeverk('ANNET', 'Begrunnelse oppgis i fritekst', gruppe,2);
  });
});
