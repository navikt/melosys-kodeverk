describe('Oppgavetyper', () => {
  const gruppe = 'oppgavetyper';
  describe('Behandling', () => {
    testKodeset('BEH_SAK', 'Behandling', gruppe);
    testKodeverk('BEH_SAK', 'Behandling', gruppe,0);
  });
  describe('Journalføring', () => {
    testKodeset('JFR', 'Journalføring', gruppe);
    testKodeverk('JFR', 'Journalføring', gruppe,1);
  });
});
