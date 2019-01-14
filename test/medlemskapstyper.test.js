describe('Medlemskapstyper', () => {
  const gruppe = 'medlemskapstyper';
  describe('Pliktig medlemskap', () => {
    testKodeMap('PLIKTIG', 'Pliktig medlemskap', gruppe);
    testKodeverk('PLIKTIG', 'Pliktig medlemskap', gruppe,0);
  });
  describe('Frivillig medlemskap', () => {
    testKodeMap('FRIVILLIG', 'Frivillig medlemskap', gruppe);
    testKodeverk('FRIVILLIG', 'Frivillig medlemskap', gruppe,1);
  });
  describe('Uten dekning', () => {
    testKodeMap('UNNTATT', 'Uten dekning', gruppe);
    testKodeverk('UNNTATT', 'Uten dekning', gruppe,2);
  });
});
