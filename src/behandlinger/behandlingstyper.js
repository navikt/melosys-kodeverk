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
    kode: 'REGISTRERING_UNNTAK_NORSK_TRYGD',
    term: 'Registrering av unntak norsk trygd (A009,A010)'
  },
  {
    kode: 'UTL_MYND_UTPEKT_NORGE',
    term: 'Norge er utpekt (A003)'
  },
  {
    kode: 'UTL_MYND_UTPEKT_SEG_SELV',
    term: 'Utl. myndh. har utpekt seg selv (A003)'
  },
  {
    kode: 'NY_VURDERING',
    term: 'Behandle ny vurdering'
  },
  {
    kode: 'ENDRET_PERIODE',
    term: 'Behandle forkortet periode'
  },
  {
    kode: 'ANMODNING_OM_UNNTAK_HOVEDREGEL',
    term: 'Behandling av en mottatt anmodning om unntak hovedregel (A001)'
  },
  {
    kode: 'ØVRIGE_SED',
    term: 'Behandling av alle øvrige SED'
  }
];
module.exports.typer = behandlingstyper;
