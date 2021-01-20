/**
 * Kodeverk/medfolgende_barn_begrunnelser_ftrl
 * ref: https://confluence.adeo.no/display/TEESSI/Ulike+begrunnelser+FTRL#UlikebegrunnelserFTRL-MEDF%C3%98LGENDE_BARN_BEGRUNNELSER_FTRL
 * @module
 */
const medfolgende_barn_begrunnelser_ftrl = [
  {
    kode: 'OVER_18_AR',
    term: 'Personen det søkes for er over 18 år'
  },
  {
    kode: 'IKKE_SOEKERS_BARN',
    term: 'Barnet er ikke søkerens eget'
  },
  {
    kode: 'MANGLER_OPPLYSNINGER',
    term: 'Mangler opplysninger for å vurdere barnets trygdetilhørighet'
  }
];
module.exports.medfolgende_barn_begrunnelser_ftrl = medfolgende_barn_begrunnelser_ftrl;
