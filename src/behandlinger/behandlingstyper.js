/**
 * Kodeverk/behandlingstyper
 * @module
 */
const behandlingstyper = [
  {
    kode: 'SOEKNAD',
    term: 'Søknad'
  },
  {
    kode: 'KLAGE',
    term: 'Klage'
  },
  {
    kode: 'ANKE',
    term: 'Anke'
  },
  {
    kode: 'UNNTAK_FRA_MEDLEMSKAP',
    term: 'Registrering av unntak'
  },
  {
    kode: 'NORGE_UTPEKT',
    term: 'Behandle at Norge er utpekt'
  },
  {
    kode: 'PAASTAND_UTL',
    term: 'Behandle påstand fra utlandet'
  },
  {
    kode: 'NY_VURDERING',
    term: 'Behandle ny vurdering'
  },
  {
    kode: 'ENDRET_PERIODE',
    term: 'Behandle forkortet periode'
  }
];
module.exports.behandlingstyper = behandlingstyper;
