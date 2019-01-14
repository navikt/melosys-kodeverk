describe('Dokument titler', () => {
  const gruppe = 'dokumenttitler';
  describe('Arbeidsforhold', () => {
    testKodeset('ARBF', 'Arbeidsforhold', gruppe);
    testKodeverk('ARBF', 'Arbeidsforhold', gruppe,0);
  });
  describe('Bekreftelse på medlemskap i folketrygden', () => {
    testKodeset('BKR_MEDL', 'Bekreftelse på medlemskap i folketrygden', gruppe);
    testKodeverk('BKR_MEDL', 'Bekreftelse på medlemskap i folketrygden', gruppe,1);
  });
  describe('Inntektsopplysninger', () => {
    testKodeset('INNT_SKAT', 'Inntektsopplysninger', gruppe);
    testKodeverk('INNT_SKAT', 'Inntektsopplysninger', gruppe,2);
  });
  describe('Merknad til sak', () => {
    testKodeset('MERK', 'Merknad til sak', gruppe);
    testKodeverk('MERK', 'Merknad til sak', gruppe,3);
  });
  describe('Studiedokumentasjon', () => {
    testKodeset('STUDIE_DOKUMENTASJON', 'Studiedokumentasjon', gruppe);
    testKodeverk('STUDIE_DOKUMENTASJON', 'Studiedokumentasjon', gruppe,4);
  });
  describe('Søknad om medlemskap', () => {
    testKodeset('SOK_MED', 'Søknad om medlemskap', gruppe);
    testKodeverk('SOK_MED', 'Søknad om medlemskap', gruppe,5);
  });
  describe('Unntak', () => {
    testKodeset('BEKR_UNNT_FRA_MEDL', 'Unntak', gruppe);
    testKodeverk('BEKR_UNNT_FRA_MEDL', 'Unntak', gruppe,6);
  });
  describe('Annet (=fritekst)', () => {
    testKodeset('ANNET', 'Annet (=fritekst)', gruppe);
    testKodeverk('ANNET', 'Annet (=fritekst)', gruppe,7);
  });
});
