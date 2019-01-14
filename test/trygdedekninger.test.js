describe('Trygdedekninger', () => {
  const gruppe = 'trygdedekninger';
  describe('Uten dekning', () => {
    testKodeMap('UTEN_DEKNING', 'Uten dekning', gruppe);
    testKodeverk('UTEN_DEKNING', 'Uten dekning', gruppe,0);
  });
  describe('Full medlemskap i trygden for ytelser omfattet av EU/EØS forordningen.', () => {
    testKodeMap('FULL_DEKNING_EOSFO', 'Full medlemskap i trygden for ytelser omfattet av EU/EØS forordningen.', gruppe);
    testKodeverk('FULL_DEKNING_EOSFO', 'Full medlemskap i trygden for ytelser omfattet av EU/EØS forordningen.', gruppe,1);
  });
});
