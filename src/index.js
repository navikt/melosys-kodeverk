/**
 * Kodeverk.
 * @module
 */
const { aktoersroller } = require('./aktoerroller');
const { anmodningsperiodesvartyper } = require('./anmodningsperiodesvartyper');
const { avklartefaktatyper } = require('./avklartefaktatyper');
const { avsendertyper } = require('./avsendertyper');
const { begrunnelser } = require('./begrunnelser');
const { behandlinger } = require('./behandlinger');
const { dokumenttyper } = require('./dokumenttyper');
const { brev } = require('./brev');
const { finansiering } = require('./finansiering');
const { forespoerseltyper } = require('./forespoerseltyper');
const { landkoder } = require('./landkoder');
const { lovvalgsbestemmelser } = require('./lovvalgsbestemmelser');
const { maritimtyper } = require('./maritimtyper');
const { medlemskapstyper } = require('./medlemskapstyper');
const { mottaksretning } = require('./mottaksretning');
const { oppgavetyper } = require('./oppgavetyper');
const { representerer } = require('./representerer');
const { saksstatuser } = require('./saksstatuser');
const { sakstyper } = require('./sakstyper');
const { territoriekoder } = require('./territoriekoder');
const { trygdedekninger } = require('./trygdedekninger');
const { utfallregistreringunntak } = require('./utfallregistreringunntak');
const { vedleggstitler } = require('./vedleggstitler');
const { vilkaar } = require('./vilkaar');
const { yrker } = require('./yrker');

const Transform  = require('./transform');

const KodeTermObjects = {
  aktoersroller,
  anmodningsperiodesvartyper,
  avklartefaktatyper,
  avsendertyper,
  behandlinger,
  begrunnelser,
  brev,
  dokumenttyper,
  finansiering,
  forespoerseltyper,
  landkoder,
  lovvalgsbestemmelser,
  maritimtyper,
  medlemskapstyper,
  mottaksretning,
  oppgavetyper,
  representerer,
  saksstatuser,
  sakstyper,
  territoriekoder,
  trygdedekninger,
  utfallregistreringunntak,
  vedleggstitler,
  vilkaar,
  yrker,
};

const Koder = Transform.kodeverk2KodeSet(KodeTermObjects);
const KodeTermValues = Transform.kodeverk2KodeMap(KodeTermObjects);

module.exports.Koder = Koder;
module.exports.KTObjects = KodeTermObjects;
module.exports.Terms = KodeTermValues;
