/**
 * Kodeverk/vesentligVirksomhet
 * ref: https://confluence.adeo.no/display/TEESSI/Ulike+begrunnelser
 * @module
 */
const unntak_periode_begrunnelser = [
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
    term: 'Startdato er før sluttdato'
  },
  {
    kode: 'PERIODE_FOR_GAMMEL',
    term: 'Periode mer enn 5 år tilbake i tid'
  },
  {
    kode: 'PERIODE_LANGT_FREM_I_TID',
    term: 'Periode mer enn 1 år frem i tid'
  },
  {
    kode: 'BOSATT_I_NORGE',
    term: 'Person er bosatt i Norge'
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
  }
];
module.exports.unntak_periode_begrunnelser = unntak_periode_begrunnelser;
