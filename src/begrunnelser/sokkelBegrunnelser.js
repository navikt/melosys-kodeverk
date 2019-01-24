/**
 * Kodeverk/vesentligVirksomhet
 * ref: https://confluence.adeo.no/display/TEESSI/Kodeverk+i+Melosys
 * @module
 */
const sokkelBegrunnelser = [
  {
    kode: 'IKKE_EGEN_FREMDRIFT',
    term: 'Ikke framdrift for egen maskin'
  },
  {
    kode: 'IKKE_ORDINAER_SKIPSFART',
    term: 'Skrogtypen kan ikke brukes i ordinær skipsfart'
  },
  {
    kode: 'BORESKIP',
    term: 'Boreskip - Sokkel'
  },
  {
    kode: 'FAST_INSTALLASJON',
    term: 'Fast installasjon'
  }
];
module.exports.SOKKEL_BEGRUNNELSER = sokkelBegrunnelser;
