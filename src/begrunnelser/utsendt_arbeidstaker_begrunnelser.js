const utsendt_arbeidstaker_begrunnelser = [
  {
    kode: 'UTSENDELSE_OVER_24_MN',
    term: 'Utsendingen er ment å vare mer enn 24 md.',
  },
  {
    kode: 'ERSTATTER_ANNEN',
    term: 'Erstatter en annen utsendt person, samlet periode over 24 md.',
  },
  {
    kode: 'IKKE_UTSENDT_PAA_OPPDRAG_FOR_AG',
    term: 'Ikke sendt ut av arbeidsgiver for å utføre arbeid som må gjøres i utlandet',
  },
  {
    kode: 'IKKE_NORSK_AG_REGNING',
    term: 'Lønnes helt eller delvis av et utenlandsk foretak',
  },
  {
    kode: 'IKKE_OMFATTET_LENGE_NOK_I_NORGE_FOER',
    term: 'Ansatt for å sendes ut, og ikke omfattet av norsk trygd 1 md. før utsending',
  },
  {
    kode: 'UNDER_2_MN_SIDEN_FORRIGE_UTSENDING_TIL_SAMME_LAND',
    term: 'Mindre enn 2 md. siden søker var utsendt for å arbeide i samme land for samme arbeidsgiver',
  },
  {
    kode: 'IKKE_VESENTLIG_VIRKSOMHET',
    term: 'Foretaket har ikke vesentlig virksomhet i Norge',
  }
];
module.exports.utsendt_arbeidstaker_begrunnelser = utsendt_arbeidstaker_begrunnelser;
