const { avslag } = require('./avslag');
const { endret_unntaksperiode } = require('./endretunntaksperiode');
const { ftrl_2_8_foerste_bokstav_a_begrunnelser } = require('./ftrl_2_8_foerste_bokstav_a_begrunnelser');
const { ftrl_2_8_annet_ledd_begrunnelser } = require('./ftrl_2_8_annet_ledd_begrunnelser');

const folketrygdloven = {
  avslag,
  endret_unntaksperiode,
  ftrl_2_8_foerste_bokstav_a_begrunnelser,
  ftrl_2_8_annet_ledd_begrunnelser
};

module.exports.folketrygdloven = folketrygdloven;

