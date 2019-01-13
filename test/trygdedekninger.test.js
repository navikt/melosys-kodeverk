describe('Trygdedekninger', () => {
  const gruppe = 'trygdedekninger';
  describe('Uten dekning', () => {
    testKodeset('UTEN_DEKNING', 'Uten dekning', gruppe);
    testKodeverk('UTEN_DEKNING', 'Uten dekning', gruppe,0);
  });
  describe('Full medlemskap i trygden for ytelser omfattet av EU/EØS forordningen.', () => {
    testKodeset('FULL_DEKNING_EOSFO', 'Full medlemskap i trygden for ytelser omfattet av EU/EØS forordningen.', gruppe);
    testKodeverk('FULL_DEKNING_EOSFO', 'Full medlemskap i trygden for ytelser omfattet av EU/EØS forordningen.', gruppe,1);
  });
});
