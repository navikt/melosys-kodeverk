describe('Medlemskapstyper', () => {
  const gruppe = 'medlemskapstyper';
  describe('Pliktig medlemskap', () => {
    testKodeset('PLIKTIG', 'Pliktig medlemskap', gruppe);
    testKodeverk('PLIKTIG', 'Pliktig medlemskap', gruppe,0);
  });
  describe('Frivillig medlemskap', () => {
    testKodeset('FRIVILLIG', 'Frivillig medlemskap', gruppe);
    testKodeverk('FRIVILLIG', 'Frivillig medlemskap', gruppe,1);
  });
  describe('Uten dekning', () => {
    testKodeset('UNNTATT', 'Uten dekning', gruppe);
    testKodeverk('UNNTATT', 'Uten dekning', gruppe,2);
  });
});
