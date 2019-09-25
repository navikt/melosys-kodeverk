/**
 * Kodeverk/resultattyper
 * ref: https://confluence.adeo.no/display/TEESSI/Kodeverk+i+Melosys
 * @module
 */
const resultattyper = [
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
    term: 'Saken er henlagt',
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
  }
];
module.exports.resultattyper = resultattyper;
