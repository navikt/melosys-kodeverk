/**
 * Kodeverk/behandlingsresultattyper
 * ref: https://confluence.adeo.no/display/TEESSI/Kodeverk+i+Melosys
 * @module
 */
const behandlingsresultattyper = [
  {
    kode: 'FASTSATT_LOVVALGSLAND',
    term: 'Lovvalgsland er fastsatt',
  },
  {
    kode: 'FORELOEPIG_FASTSATT_LOVVALGSLAND',
    term: 'Lovvalgsland er foreløpig fastsatt',
  },
  {
    kode: 'HENLEGGELSE',
    term: 'Søknaden er henlagt/trukket',
  },
  {
    kode: 'ANMODNING_OM_UNNTAK',
    term: 'Anmodning om unntak',
  },
  {
    kode: 'IKKE_FASTSATT',
    term: 'Ikke fastsatt',
  },
  {
    kode: 'REGISTRERT_UNNTAK',
    term: 'Om unntaksperioden har blitt godkjent for registrering',
  },
  {
    kode: 'AVSLAG_MANGLENDE_OPPL',
    term: 'Avslått pga manglende opplysninger',
  },
  {
    kode: 'MEDLEM_I_FOLKETRYGDEN',
    term: 'Medlem i folketrygden'
  },
  {
    kode: 'FERDIGBEHANDLET',
    term: 'Ferdigbehandlet'
  },
  {
    kode: 'HENLEGGELSE_BORTFALT',
    term: 'Kan ikke behandles i Melosys'
  },
  {
    kode: 'UNNTATT_MEDLEMSKAP',
    term: 'Unntatt fra medlemskap i folketrygden'
  },
  {
    kode: 'AVSLAG_SØKNAD',
    term: 'Søknaden er avslått'
  },
  {
    kode: 'UTPEKING_NORGE_AVVIST',
    term: 'Utpeking av Norge er avvist'
  }
];
module.exports.behandlingsresultattyper = behandlingsresultattyper;
