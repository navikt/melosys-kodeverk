/**
 * Kodeverk/vesentligVirksomhet
 * ref: https://confluence.adeo.no/display/TEESSI/Kodeverk+i+Melosys
 * @module
 */
const vesentligVirksomhet = [
  {
    kode: 'KUN_ADMIN_ANSATTE',
    term: 'Foretaket har kun administrativt ansatte i Norge.'
  },
  {
    kode: 'FORLITE_OMSETNING_NORGE',
    term: 'Foretaket har ikke hatt mer enn 25 % av sin omsetning i Norge de siste 12 månedene.'
  },
  {
    kode: 'FORMANGE_ADMIN_ANSATTE',
    term: 'Foretakets andel administrativt ansatte er større enn den totale andel ansatte som utfører sitt arbeid i Norge.'
  },
  {
    kode: 'REKRUTTERER_ANSATTE_UTL',
    term: 'Foretaket rekrutterer ikke ansatte i Norge.'
  },
  {
    kode: 'FORLITE_OPPDRAG_NORGE',
    term: 'Foretaket utfører mindre enn 50 % av sine oppdrag i Norge.'
  },
  {
    kode: 'FORLITE_KONTRAKTER_NORGE',
    term: 'Foretaket inngår mindre enn 50 % av sine kontrakter med kunder i Norge.'
  },
  {
    kode: 'KONTRAKTER_IKKE_NORSKLOV',
    term: 'Det er ikke norsk lovgivning som er gjeldende for kontraktene foretaket inngår med sine kunder.'
  }
];
module.exports.vesentligVirksomhet = vesentligVirksomhet;
