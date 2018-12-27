/**
 * Kodeverk/vesentligVirksomhet
 * ref: https://confluence.adeo.no/display/TEESSI/Kodeverk+i+Melosys
 * @module
 */
const artikkel12_1 = [
  {
    kode: 'IKKE_VESENTLIGVIRKSOMHET',
    term: 'Arbeidsgiver har ikke vesentlig virksomhet.'
  },
  {
    kode: 'UTSENDELSE_FOR_LANG',
    term: 'Varighet utsendelse overskrider fastsatt lengden i forordningen.'
  },
  {
    kode: 'ERSTATTER_ANNEN',
    term: 'Arbeidstaker erstatter en annen utsendt arbeidstaker.'
  },
  {
    kode: 'FORBLI_ANSATT_LOENNET',
    term: 'Bruker forblir ansatt og lønnet av samme arbeidsgiver i utsendelse periode.'
  },
  {
    kode: 'HJEMMEKONTOR',
    term: 'Bruker skal enten være ute under 12 mn eller er medfølgende til en utsendt som er omfattet'
  }
];
module.exports.artikkel12_1 = artikkel12_1;
