/**
 * Kodeverk/saksstatuser
 * ref: https://confluence.adeo.no/display/TEESSI/Kodeverk+i+Melosys
 * Dato: 13SEP2018, Marte Okkelmo
 * Oppdatert: 12NOV2018, Marte Okkelmo
 * @module
 */
const saksstatuser = [
  {
    kode: 'OPPRETTET',
    term: 'Saken er opprettet'
  },
  {
    kode: 'LOVVALG_AVKLART',
    term: 'Lovvalget er avklart'
  },
  {
    kode: 'AVSLUTTET',
    term: 'Saken er avsluttet'
  },
  {
    kode: 'HENLAGT',
    term: 'Saken er henlagt'
  },
  {
    kode: 'HENLAGT_BORTFALT',
    term: 'Saken er henlagt som bortfalt i Melosys.'
  }
];
module.exports.saksstatuser = saksstatuser;
