/**
 * Kodeverk/behandlingsresultattyper
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
  }
];
module.exports.resultattyper = resultattyper;
