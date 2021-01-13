const { avslag } = require('./avslag');
const { endret_unntaksperiode } = require('./endretunntaksperiode');
const { ftrl_2_8_forutgaaende_trygdetid_begrunnelser } = require('./ftrl_2_8_forutgaaende_trygdetid_begrunnelser');
const { ftrl_2_8_naer_tilknytning_norge_begrunnelser } = require('./ftrl_2_8_naer_tilknytning_norge_begrunnelser');
const { medfolgende_barn_begrunnelser_ftrl } = require('./medfolgende_barn_begrunnelser_ftrl');
const { medfolgende_ektefelle_samboer_begrunnelser_ftrl } = require('./medfolgende_ektefelle_samboer_begrunnelser_ftrl');

const folketrygdloven = {
  avslag,
  endret_unntaksperiode,
  ftrl_2_8_forutgaaende_trygdetid_begrunnelser,
  ftrl_2_8_naer_tilknytning_norge_begrunnelser,
  medfolgende_barn_begrunnelser_ftrl,
  medfolgende_ektefelle_samboer_begrunnelser_ftrl
};

module.exports.folketrygdloven = folketrygdloven;

