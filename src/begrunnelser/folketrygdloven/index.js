const { avslag } = require('./avslag');
const { endret_unntaksperiode } = require('./endretunntaksperiode');
const { ftrl_2_8_forutgaaende_trygdetid_begrunnelser } = require('./ftrl_2_8_forutgaaende_trygdetid_begrunnelser');
const { ftrl_2_8_naer_tilknytning_norge_begrunnelser } = require('./ftrl_2_8_naer_tilknytning_norge_begrunnelser');

const folketrygdloven = {
  avslag,
  endret_unntaksperiode,
  ftrl_2_8_forutgaaende_trygdetid_begrunnelser,
  ftrl_2_8_naer_tilknytning_norge_begrunnelser
};

module.exports.folketrygdloven = folketrygdloven;

