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
    term: 'Midlertidig',
  },
  {
    kode: 'INAKTIV',
    term: 'Inaktiv',
  },
];
module.exports.personstatuser = personstatuser;
