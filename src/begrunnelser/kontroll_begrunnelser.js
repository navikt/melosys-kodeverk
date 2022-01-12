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
    term: 'Person mangler registrert adresse. Den må registreres for å kunne sende brev, SED eller attest.'
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
    kode: 'MER_ENN_TRE_ÅR',
    term: 'OBS: Perioden er mer enn tre år!'
  },
  {
    kode: 'ATTEST_MANGLER_ARBEIDSSTED',
    term: 'Du må oppgi et arbeidssted/representant i utlandet'
  },
  {
    kode: 'ANNET',
    term: 'Fritekstfelt'
  }
];
module.exports.kontroll_begrunnelser = kontroll_begrunnelser;
