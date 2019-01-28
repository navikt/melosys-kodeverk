/**
 * Kodeverk/forutgaendeMedlemskap
 * ref: https://confluence.adeo.no/display/TEESSI/Kodeverk+i+Melosys
 * @module
 */
const forutgaendemedlemskap = [
  {
    kode: 'IKKE_LOENNET_UTSEND_AG',
    term: 'Mottok IKKE lønn fra utsendende arbeidsgiver opptjent i Norge forutgående måned.',
  },
  {
    kode: 'IKKE_LOENNET_NORGE',
    term: 'Mottok IKKE lønn fra annen arbeidsgiver opptjent i Norge forutgående måned.',
  },
  {
    kode: 'MOTTAT_LOENN_UTL',
    term: 'Mottok lønn opptjent i annet land forutgående måned.',
  },
  {
    kode: 'IKKE_FOLKEREGISTRERT_NORGE',
    term: 'Har ikke TPS-adresse i Norge.',
  },
  {
    kode: 'IKKE_ANSATT_UTSEND_AG',
    term: 'Er IKKE registrert i Aa-registeret hos utsendende arbeidsgiver.',
  }
];
module.exports.forutgaendemedlemskap = forutgaendemedlemskap;
