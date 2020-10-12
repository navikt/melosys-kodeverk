/**
 * Kodeverk/vesentligVirksomhet
 * ref: https://confluence.adeo.no/display/TEESSI/Ulike+begrunnelser
 * @module
 */
const medfolgende_barn_begrunnelser = [
  {
    kode: 'OVER_18_AR',
    term: 'Personen det søkes for er over 18 år'
  },
  {
    kode: 'IKKE_SOEKERS_BARN',
    term: 'Barnet er ikke søkerens eget'
  },
  {
    kode: 'IKKE_BOSATT_I_NORGE',
    term: 'Barnet er ikke bosatt i Norge'
  },
  {
    kode: 'MANGLER_OPPLYSNINGER',
    term: 'Mangler opplysninger for å vurdere barnets trygdetilhørighet'
  }
];
module.exports.medfolgende_barn_begrunnelser = medfolgende_barn_begrunnelser;
