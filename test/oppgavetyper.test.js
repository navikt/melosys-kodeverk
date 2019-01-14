describe('Oppgavetyper', () => {
  const gruppe = 'oppgavetyper';
  describe('Behandling', () => {
    testKodeMap('BEH_SAK', 'Behandling', gruppe);
    testKodeverk('BEH_SAK', 'Behandling', gruppe,0);
  });
  describe('Journalføring', () => {
    testKodeMap('JFR', 'Journalføring', gruppe);
    testKodeverk('JFR', 'Journalføring', gruppe,1);
  });
});
