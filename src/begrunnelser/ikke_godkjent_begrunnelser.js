/**
 * Kodeverk/vesentligVirksomhet
 * ref: https://confluence.adeo.no/display/TEESSI/Ulike+begrunnelser
 * @module
 */
const ikke_godkjent_begrunnelser = [
  {
    kode: 'UTSENDELSE_OVER_24_MD',
    term: 'Utsendelseperioden overskrider 24 md'
  },
  {
    kode: 'TREDJELANDSBORGER_IKKE_AVTALELAND',
    term: 'Tredjelandsborger fra et ikke-avtaleland'
  },
  {
    kode: 'ANNET',
    term: 'Fritekst',
  }
];
module.exports.ikke_godkjent_begrunnelser = ikke_godkjent_begrunnelser;
