
const { arbeidsland } = require('./arbeidsland');
const { art12_1_forutgaaende_medl } = require('./art12_1_forutgaaende_medl');
const { art12_1_vesentlig_virksomhet } = require('./art12_1_vesentlig_virksomhet');
const { art12_1_begrunnelser } = require('./art12_1_begrunnelser');
const { art12_2_begrunnelser } = require('./art12_2_begrunnelser');
const { art12_2_normalt_virksomhet } = require('./art12_2_normalt_virksomhet');
const { art16_1_anmodning } = require('./art16_1_anmodning');
const { art16_1_anmodning_engelsk } = require('./art16_1_anmodning_engelsk');
const { art16_1_anmodning_uten_art12 } = require('./art16_1_anmodning_uten_art12');
const { art16_1_anmodning_uten_art12_engelsk } = require('./art16_1_anmodning_uten_art12_engelsk');
const { art16_1_avslag } = require('./art16_1_avslag');
const { art11_4_begrunnelser } = require('./art11_4_begrunnelser');
const { bosted } = require('./bosted');
const { endretperiode } = require('./endretperiode');
const { fartsomrader } = require('./fartsomrader');
const { forutgaendemedlemskap } = require('./forutgaendemedlemskap');
const { folketrygdloven } = require('./folketrygdloven');
const { henleggelsesgrunner } = require('./henleggelsesgrunner');
const { ikkeskip } = require('./ikkeskip');
const { ikke_godkjent_begrunnelser } = require('./ikke_godkjent_begrunnelser');
const { inngangsvilkaar } = require('./inngangsvilkaar');
const { nyvurderingbakgrunner } = require('./nyvurderingbakgrunner');
const { opphold } = require('./opphold');
const { normaltdrivervirksomhet } = require('./normaltdrivervirksomhet');
const { sokkel } = require('./sokkel');
const { kontroll_begrunnelser } = require('./kontroll_begrunnelser');
const { medfolgende_barn_begrunnelser } = require('./medfolgende_barn_begrunnelser');
const {ikkeyrkesaktivsituasjontype} = require('./ikkeyrkesaktivsituasjontype');

const begrunnelser = {
  arbeidsland,
  art12_1_begrunnelser,
  art12_2_begrunnelser,
  art12_1_forutgaaende_medl,
  art12_1_vesentlig_virksomhet,
  art12_2_normalt_virksomhet,
  art16_1_anmodning,
  art16_1_anmodning_engelsk,
  art16_1_anmodning_uten_art12,
  art16_1_anmodning_uten_art12_engelsk,
  art16_1_avslag,
  art11_4_begrunnelser,
  bosted,
  endretperiode,
  fartsomrader,
  folketrygdloven,
  forutgaendemedlemskap,
  henleggelsesgrunner,
  ikkeskip,
  ikke_godkjent_begrunnelser,
  inngangsvilkaar,
  nyvurderingbakgrunner,
  opphold,
  normaltdrivervirksomhet,
  sokkel,
  kontroll_begrunnelser,
  medfolgende_barn_begrunnelser,
  ikkeyrkesaktivsituasjontype
};

module.exports.begrunnelser = begrunnelser;
