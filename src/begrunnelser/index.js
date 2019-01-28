
const { arbeidsland } = require('./arbeidsland');
const { art12_1_forutgaaende_medl } = require('./art12_1_forutgaaende_medl');
const { art12_1_vesentlig_virksomhet } = require('./art12_1_vesentlig_virksomhet');
const { art12_1_begrunnelser } = require('./art12_1_begrunnelser');
const { art12_2_begrunnelser } = require('./art12_2_begrunnelser');
const { art12_2_normalt_virksomhet } = require('./art12_2_normalt_virksomhet');
const { art16_1_anmodning } = require('./art16_1_anmodning');
const { art16_1_avslag } = require('./art16_1_avslag');
const { art11_4_begrunnelser } = require('./art11_4_begrunnelser');
const { bosted } = require('./bosted');
const { forutgaendemedlemskap } = require('./forutgaendemedlemskap');
const { ikkeskip } = require('./ikkeskip');
const { inngangsvilkaar } = require('./inngangsvilkaar');
const { opphold } = require('./opphold');
const { normaltdrivervirksomhet } = require('./normaltdrivervirksomhet');
const { sokkel } = require('./sokkel');

const begrunnelser = {
  arbeidsland,
  art12_1_begrunnelser,
  art12_2_begrunnelser,
  art12_1_forutgaaende_medl,
  art12_1_vesentlig_virksomhet,
  art12_2_normalt_virksomhet,
  art16_1_anmodning,
  art16_1_avslag,
  art11_4_begrunnelser,
  bosted,
  forutgaendemedlemskap,
  ikkeskip,
  inngangsvilkaar,
  opphold,
  normaltdrivervirksomhet,
  sokkel
};

module.exports.begrunnelser = begrunnelser;
