/**
 * Kodeverk.
 * @module
 */
const { aktoersroller } = require('./aktoerroller');
const { avklartefakta } = require('./avklartefakta');
const { begrunnelser } = require('./begrunnelser');
const { behandlinger } = require('./behandlinger');
const { dokumenttitler } = require('./dokumenttitler');
const { dokumenttyper } = require('./dokumenttyper');
const { brev } = require('./brev');
const { finansiering } = require('./finansiering');
const { forespoerseltyper } = require('./forespoerseltyper');
const { henleggelsesgrunner } = require('./henleggelsesgrunner');
const { kontantytelser_eu_fo } = require('./kontantytelser_eu_fo');
const { landkoder } = require('./landkoder');
const { lovvalgsbestemmelser } = require('./lovvalgsbestemmelser');
const { medlemskapstyper } = require('./medlemskapstyper');
const { mottaksretning } = require('./mottaksretning');
const { oppgavetyper } = require('./oppgavetyper');
const { representerer } = require('./representerer');
const { saksstatuser } = require('./saksstatuser');
const { sakstyper } = require('./sakstyper');
const { trygdedekninger } = require('./trygdedekninger');
const { vedleggstitler } = require('./vedleggstitler');
const { vilkaar } = require('./vilkaar');
const { yrker } = require('./yrker');

const Transform  = require('./transform');

const KodeTermObjects = {
  aktoersroller,
  avklartefakta,
  behandlinger,
  begrunnelser,
  brev,
  dokumenttitler,
  dokumenttyper,
  finansiering,
  forespoerseltyper,
  henleggelsesgrunner,
  kontantytelser_eu_fo,
  landkoder,
  lovvalgsbestemmelser,
  medlemskapstyper,
  mottaksretning,
  oppgavetyper,
  representerer,
  saksstatuser,
  sakstyper,
  trygdedekninger,
  vedleggstitler,
  vilkaar,
  yrker,
};

const Koder = Transform.kodeverk2KodeSet(KodeTermObjects);
const KodeTermValues = Transform.kodeverk2KodeMap(KodeTermObjects);

module.exports.Koder = Koder;
module.exports.KTObjects = KodeTermObjects;
module.exports.Terms = KodeTermValues;
