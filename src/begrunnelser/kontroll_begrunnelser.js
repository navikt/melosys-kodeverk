/**
 * Kodeverk/vesentligVirksomhet
 * ref: https://confluence.adeo.no/display/TEESSI/Ulike+begrunnelser
 * @module
 */
const kontroll_begrunnelser = [
  {
    kode: 'TREDJELANDSBORGER_IKKE_AVTALELAND',
    term: 'Personen er ikke EØS-borger'
  },
  {
    kode: 'OVERLAPPENDE_MEDL_PERIODER',
    term: 'Det finnes overlappende periode i MEDL'
  },
  {
    kode: 'OVERLAPPENDE_UNNTAK_PERIODER',
    term: 'Det finnes overlappende unntaksperiode i MEDL'
  },
  {
    kode: 'OVERLAPPENDE_MEDLEMSKAPSPERIODER',
    term: 'Det finnes overlappende medlemskapsperiode i MEDL'
  },
  {
    kode: 'MOTTAR_YTELSER',
    term: 'Personen mottar ytelser'
  },
  {
    kode: 'PERIODEN_OVER_24_MD',
    term: 'Periodelengde er mer enn 24 måneder'
  },
  {
    kode: 'PERIODEN_OVER_5_AR',
    term: 'Periodelengde er mer enn 5 år'
  },
  {
    kode: 'FEIL_I_PERIODEN',
    term: 'Sluttdato er før startdato'
  },
  {
    kode: 'PERIODE_FOR_GAMMEL',
    term: 'Periode er før 1. juni 2012'
  },
  {
    kode: 'PERIODE_LANGT_FREM_I_TID',
    term: 'Periode mer enn 1 år frem i tid'
  },
  {
    kode: 'BOSATT_I_NORGE',
    term: 'Personen har en folkeregistrert bostedsadresse i Norge'
  },
  {
    kode: 'INGEN_SLUTTDATO',
    term: 'Sluttdato mangler'
  },
  {
    kode: 'PERSON_DOD',
    term: 'Personen er død'
  },
  {
    kode: 'LOVVALGSLAND_NORGE',
    term: 'Norge er oppgitt som lovvalgsland'
  },
  {
    kode: 'ARBEIDSSTED_UTENFOR_EOS',
    term: 'Arbeidsstedet er utenfor EU/EØS'
  },
  {
    kode: 'MANGLENDE_BOSTEDSADRESSE',
    term: 'Bostedsadresse trengs for å kunne utstede A1.'
  },
  {
    kode: 'MANGLENDE_REGISTRERTE_ADRESSE',
    term: 'Bruker har ingen registrert adresse.'
  },
  {
    kode: 'MANGLENDE_OPPL_ARBEIDSSTED',
    term: 'Navn og land for arbeidssted trengs for utfylling av SED.'
  },
  {
    kode: 'MANGLENDE_OPPL_ANDRE_ARBEIDSFORHOLD_NO',
    term: 'Navn og land for andre arbeidsforhold i Norge trengs for utfylling av SED.'
  },
  {
    kode: 'MANGLENDE_OPPL_ANDRE_ARBEIDSFORHOLD_UTL',
    term: 'Navn og land for andre arbeidsforhold i utlandet trengs for utfylling av SED.'
  },
  {
    kode: 'MER_ENN_12_MD',
    term: 'Perioden er mer enn 12 måneder!'
  },
  {
    kode: 'MER_ENN_TRE_ÅR',
    term: 'Perioden er mer enn tre år!'
  },
  {
    kode: 'MER_ENN_FEM_ÅR',
    term: 'Perioden er mer enn fem år!'
  },
  {
    kode: 'OPPHØRT_ARBEIDSGIVER',
    term: 'Virksomheten er opphørt. Du kan enten velge å ikke sende orienteringsbrev til arbeidsgiver, eller - hvis arbeidsgiver har et nytt organisasjonsnummer - legge det inn i sidemenyen, og starte på nytt i stegvelgeren fra Virksomhet.'
  },
  {
    kode: 'ATTEST_MANGLER_ARBEIDSSTED',
    term: 'Du må oppgi et arbeidssted/representant i utlandet'
  },
  {
    kode: 'MANGLER_VIRKSOMHET',
    term: 'Det er ingen virksomhet registrert. Du må legge til virksomhet under Arbeidsgiver/virksomhet'
  },
  {
    kode: 'IKKE_KUN_EN_VIRKSOMHET',
    term: 'Ingen eller flere enn én norsk eller utenlandsk virksomhet oppgitt for avslag eller art 16.1'
  },
  {
    kode: 'INGEN_ARBEIDSGIVERE',
    term: 'Finner ingen arbeidsgivere. Hent registeropplysninger'
  },
  {
    kode: 'OVERGANGSREGEL_VALGT',
    term: 'Overgangsregel valgt. Manuell behandling kreves'
  },
  {
    kode: 'ANNET',
    term: 'Fritekstfelt'
  }
];
module.exports.kontroll_begrunnelser = kontroll_begrunnelser;
