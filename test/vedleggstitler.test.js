describe('Vedleggstitler', () => {
  const gruppe = 'vedleggstitler';
  describe('Vedleggstittel 1', () => {
    testKodeMap('TITTEL_1', 'Vedleggstittel 1', gruppe);
    testKodeverk('TITTEL_1', 'Vedleggstittel 1', gruppe,0);
  });
  describe('Vedleggstittel 2', () => {
    testKodeMap('TITTEL_2', 'Vedleggstittel 2', gruppe);
    testKodeverk('TITTEL_2', 'Vedleggstittel 2', gruppe,1);
  });
  describe('Annet...', () => {
    testKodeMap('ANNET', 'Annet...', gruppe);
    testKodeverk('ANNET', 'Annet...', gruppe,2);
  });
});
