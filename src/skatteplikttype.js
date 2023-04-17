/**
 * Kodeverk/Skatteplikttype
 * @module
 */
const skatteplikttype = [
  {
    kode: 'SKATTEPLIKTIG',
    term: 'Skattepliktig til Norge'
  },
  {
    kode: 'IKKE_SKATTEPLIKTIG',
    term: 'Ikke skattepliktig til Norge',
  },
  {
    kode: 'TRYGDEAVGIFT_BETALES_TIL_NAV_OG_SKATT',
    term: 'Trygdeavgift skal betales både til Nav og Skatt',
  }
];

module.exports.skatteplikttype = skatteplikttype;
