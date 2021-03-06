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
const { behandlingsgrunnlagtyper } = require('./behandlingsgrunnlagtyper.js');
const { dokumenttyper } = require('./dokumenttyper');
const { brev } = require('./brev');
const { finansiering } = require('./finansiering');
const { forespoerseltyper } = require('./forespoerseltyper');
const { folketrygdloven_kap2_bestemmelser } = require('./folketrygdloven_kap2_bestemmelser');
const { innretningstyper } = require('./innretningstyper');
const { landkoder } = require('./landkoder');
const { loenn_forhold } = require('./loenn_forhold');
const { lovvalgsbestemmelser } = require('./lovvalgsbestemmelser');
const { maritimtyper } = require('./maritimtyper');
const { flyvningstyper } = require('./flyvningstyper');
const { medlemskapstyper } = require('./medlemskapstyper');
const { mottaksretning } = require('./mottaksretning');
const { oppgavetyper } = require('./oppgavetyper');
const { representerer } = require('./representerer');
const { saerligeavgiftsgrupper } = require('./saerligeavgiftsgrupper');
const { saksstatuser } = require('./saksstatuser');
const { sakstyper } = require('./sakstyper');
const { territoriekoder } = require('./territoriekoder');
const { trygdeavgift_typer } = require('./trygdeavgift_typer');
const { trygdedekninger } = require('./trygdedekninger');
const { utfallregistreringunntak } = require('./utfallregistreringunntak');
const { vedleggstitler } = require('./vedleggstitler');
const { vedtakstyper } = require('./vedtakstyper');
const { vilkaar } = require('./vilkaar');
const { vurderingsutfall_trygdeavgift_norsk_inntekt } = require('./vurderingsutfall_trygdeavgift_norsk_inntekt');
const { vurderingsutfall_trygdeavgift_utenlandsk_inntekt } = require('./vurderingsutfall_trygdeavgift_utenlandsk_inntekt');
const { yrker } = require('./yrker');

const Transform  = require('./transform');

const KodeTermObjects = {
  aktoersroller,
  anmodningsperiodesvartyper,
  avklartefaktatyper,
  avsendertyper,
  behandlinger,
  behandlingsgrunnlagtyper,
  begrunnelser,
  brev,
  dokumenttyper,
  finansiering,
  forespoerseltyper,
  folketrygdloven_kap2_bestemmelser,
  innretningstyper,
  landkoder,
  loenn_forhold,
  lovvalgsbestemmelser,
  maritimtyper,
  flyvningstyper,
  medlemskapstyper,
  mottaksretning,
  oppgavetyper,
  representerer,
  saerligeavgiftsgrupper,
  saksstatuser,
  sakstyper,
  territoriekoder,
  trygdeavgift_typer,
  trygdedekninger,
  utfallregistreringunntak,
  vedleggstitler,
  vedtakstyper,
  vilkaar,
  vurderingsutfall_trygdeavgift_norsk_inntekt,
  vurderingsutfall_trygdeavgift_utenlandsk_inntekt,
  yrker,
};

const Koder = Transform.kodeverk2KodeSet(KodeTermObjects);
const KodeTermValues = Transform.kodeverk2KodeMap(KodeTermObjects);

module.exports.Koder = Koder;
module.exports.KTObjects = KodeTermObjects;
module.exports.Terms = KodeTermValues;
