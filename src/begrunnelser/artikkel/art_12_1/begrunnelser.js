const begrunnelser = [
  {
    kode: 'UTSENDELSE_OVER_24_MN',
    term: 'Utsendelseperioden overskrider 24 måneder',
  },
  {
    kode: 'ERSTATTER_ANNEN',
    term: 'Erstatter en annen utsendt person',
  },
  {
    kode: 'IKKE_UTSENDT_PAA_OPPDRAG_FOR_AG',
    term: 'Ikke sendt ut for å utføre oppdrag for det norske foretaket',
  },
  {
    kode: 'IKKE_OMFATTET_LENGE_NOK_I_NORGE_FOER',
    term: 'Ikke omfattet av norsk trygd 1 md før utsendelse',
  },
  {
    kode: 'UNDER_2_MN_SIDEN_FORRIGE_UTSENDING_TIL_SAMME_LAND',
    term: 'Mindre enn 2 md siden søker var utsendt for å utføre oppdrag i samme land for samme foretak',
  },
  {
    kode: 'IKKE_VESENTLIG_VIRKSOMHET',
    term: 'Foretaket har ikke vesentlig virksomhet',
  }
];
module.exports.begrunnelser = begrunnelser;
