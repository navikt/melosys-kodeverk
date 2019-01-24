
const { ArbeidslandBegrunnelser } = require('./ArbeidslandBegrunnelser');
const { ART12_1_FORUTGAAENDE_MEDL_BEGRUNNELSE } = require('./ART12_1_FORUTGAAENDE_MEDL_BEGRUNNELSE');
const { ART12_1_VESENTLIG_VIRKSOMHET_BEGRUNNELSER } = require('./ART12_1_VESENTLIG_VIRKSOMHET_BEGRUNNELSER');
const { ART12_1_BEGRUNNELSER } = require('./ART12_1_BEGRUNNELSER');
const { ART12_2_BEGRUNNELSER } = require('./ART12_2_BEGRUNNELSER');
const { ART12_2_NORMALT_VIRKSOMHET_BEGRUNNELSER } = require('./ART12_2_NORMALT_VIRKSOMHET_BEGRUNNELSER');
const { ART16_1_ANMODNING_BEGRUNNELSER } = require('./ART16_1_ANMODNING_BEGRUNNELSER');
const { Art16_1_AVSLAG_BEGRUNNELSER } = require('./Art16_1_AVSLAG_BEGRUNNELSER');
const { ART11_4_BEGRUNNELSER } = require('./ART11_4_BEGRUNNELSER');
const { bosted } = require('./bosted');
const { forutgaendeMedlemskap } = require('./forutgaendeMedlemskap');
const { ikkeSkip } = require('./ikkeSkip');
const { InngangsvilkårBegrunnelser } = require('./InngangsvilkårBegrunnelser');
const { OppholdBegrunnelser } = require('./opphold');
const { normaltDriverVirksomhet } = require('./normaltDriverVirksomhet');
const { SOKKEL_BEGRUNNELSER } = require('./sokkelBegrunnelser');

const begrunnelser = {
  ArbeidslandBegrunnelser,
  ART12_1_BEGRUNNELSER,
  ART12_2_BEGRUNNELSER,
  ART12_1_FORUTGAAENDE_MEDL_BEGRUNNELSE,
  ART12_1_VESENTLIG_VIRKSOMHET_BEGRUNNELSER,
  ART12_2_NORMALT_VIRKSOMHET_BEGRUNNELSER,
  ART16_1_ANMODNING_BEGRUNNELSER,
  Art16_1_AVSLAG_BEGRUNNELSER,
  ART11_4_BEGRUNNELSER,
  bosted,
  forutgaendeMedlemskap,
  ikkeSkip,
  InngangsvilkårBegrunnelser,
  OppholdBegrunnelser,
  normaltDriverVirksomhet,
  SOKKEL_BEGRUNNELSER
};

module.exports.Begrunnelser = begrunnelser;
