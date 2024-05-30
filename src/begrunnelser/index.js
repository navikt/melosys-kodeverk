
const { arbeidsland } = require('./arbeidsland');
const { forutgaaende_medl_begrunnelser } = require('./forutgaaende_medl_begrunnelser');
const { vesentlig_virksomhet_begrunnelser } = require('./vesentlig_virksomhet_begrunnelser');
const { utsendt_arbeidstaker_begrunnelser } = require('./utsendt_arbeidstaker_begrunnelser');
const { utsendt_naeringsdrivende_begrunnelser } = require('./utsendt_naeringsdrivende_begrunnelser');
const { normalt_virksomhet_begrunnelser } = require('./normalt_virksomhet_begrunnelser');
const { anmodning_begrunnelser } = require('./anmodning_begrunnelser');
const { anmodning_engelsk_begrunnelser } = require('./anmodning_engelsk_begrunnelser');
const { direkte_til_anmodning_begrunnelser } = require('./direkte_til_anmodning_begrunnelser');
const { direkte_til_anmodning_engelsk_begrunnelser } = require('./direkte_til_anmodning_engelsk_begrunnelser');
const { avslag_anmodning_begrunnelser } = require('./avslag_anmodning_begrunnelser');
const { bosted } = require('./bosted');
const { endretperiode } = require('./endretperiode');
const { fartsomrader } = require('./fartsomrader');
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
  utsendt_arbeidstaker_begrunnelser,
  utsendt_naeringsdrivende_begrunnelser,
  forutgaaende_medl_begrunnelser,
  vesentlig_virksomhet_begrunnelser,
  normalt_virksomhet_begrunnelser,
  anmodning_begrunnelser,
  anmodning_engelsk_begrunnelser,
  direkte_til_anmodning_begrunnelser,
  direkte_til_anmodning_engelsk_begrunnelser,
  avslag_anmodning_begrunnelser,
  bosted,
  endretperiode,
  fartsomrader,
  folketrygdloven,
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
