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
    kode: 'SOEKNAD_IKKE_YRKESAKTIV',
    term: 'Søknad ikke yrkesaktiv'
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
    kode: 'REGISTRERING_UNNTAK_NORSK_TRYGD_UTSTASJONERING',
    term: 'Registrering av unntak fra norsk trygd – utstasjonerte (A009)'
  },
  {
    kode: 'REGISTRERING_UNNTAK_NORSK_TRYGD_ØVRIGE',
    term: 'Registrering av unntak fra norsk trygd – øvrige (A010)'
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
  },
  {
    kode: 'VURDER_TRYGDETID',
    term: 'Behandling av forespørsel om trygdetid'
  }
];
module.exports.behandlingstyper = behandlingstyper;
