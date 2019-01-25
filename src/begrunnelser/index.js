
const { arbeidsland } = require('./arbeidsland');
const { art12_1_forutgaaende_medl } = require('./art12_1_forutgaaende_medl');
const { art12_1_vesentlig_virksomhet } = require('./art12_1_vesentlig_virksomhet');
const { art12_1 } = require('./art12_1');
const { art12_2 } = require('./art12_2');
const { art12_2_normalt_virksomhet } = require('./art12_2_normalt_virksomhet');
const { art16_1_anmodning } = require('./art16_1_anmodning');
const { art16_1_avslag } = require('./art16_1_avslag');
const { art11_4 } = require('./art11_4');
const { bosted } = require('./bosted');
const { forutgaendeMedlemskap } = require('./forutgaendeMedlemskap');
const { ikkeSkip } = require('./ikkeSkip');
const { inngangsvilkår } = require('./Inngangsvilkår');
const { opphold } = require('./opphold');
const { normaltDriverVirksomhet } = require('./normaltDriverVirksomhet');
const { sokkel } = require('./sokkel');

const begrunnelser = {
  arbeidsland,
  art12_1,
  art12_2,
  art12_1_forutgaaende_medl,
  art12_1_vesentlig_virksomhet,
  art12_2_normalt_virksomhet,
  art16_1_anmodning,
  art16_1_avslag,
  art11_4,
  bosted,
  forutgaendeMedlemskap,
  ikkeSkip,
  inngangsvilkår,
  opphold,
  normaltDriverVirksomhet,
  sokkel
};

module.exports.begrunnelser = begrunnelser;
