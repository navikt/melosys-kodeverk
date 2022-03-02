/**
 * Kodeverk/personstatuser
 * Personstatus fra Folkeregisteret
 * ref: https://confluence.adeo.no/display/TEESSI/Kodeverk+i+Melosys#KodeverkiMelosys-PersonStatusFolkeregister
 * @module
 */
const personstatuser = [
  {
    kode: 'BOSATT',
    term: 'Bosatt etter folkeregisterloven',
  },
  {
    kode: 'UTFLYTTET',
    term: 'Utflyttet',
  },
  {
    kode: 'FORSVUNNET',
    term: 'Forsvunnet/savnet',
  },
  {
    kode: 'DOED',
    term: 'Død',
  },
  {
    kode: 'OPPHOERT',
    term: 'Opphørt',
  },
  {
    kode: 'FOEDSELSREGISTRERT',
    term: 'Fødselsregistrert',
  },
  {
    kode: 'IKKE_BOSATT',
    term: 'Bosatt utenfor Norge',
  },
  {
    kode: 'MIDLERTIDIG',
    term: 'Midlertidig (D-nummer)',
  },
  {
    kode: 'INAKTIV',
    term: 'Inaktiv (D-nummer)',
  },
  {
    kode: 'UDEFINERT',
    term: 'Udefinert for Melosys',
  },
];
module.exports.personstatuser = personstatuser;
