/**
 * Kodeverk/behandlingsresultattyper
 * ref: https://confluence.adeo.no/display/TEESSI/Kodeverk+i+Melosys
 * @module
 */
const behandlingsresultattyper = [
  {
    kode: 'FASTSATT_LOVVALGSLAND',
    term: 'Lovvalgsland er foreløpig fastsatt',
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
  }
];
module.exports.behandlingsresultattyper = behandlingsresultattyper;
