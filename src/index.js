/**
 * Kodeverk.
 * @module
 */
const { aktoersroller } = require('./aktoerroller');
const { anmodningsperiodesvartyper } = require('./anmodningsperiodesvartyper');
const { avgiftsdekning } = require('./avgiftsdekning');
const { avklartefaktatyper } = require('./avklartefaktatyper');
const { avsendertyper } = require('./avsendertyper');
const { trygdeavtale_myndighetsland } = require('./trygdeavtale_myndighetsland');
const { begrunnelser } = require('./begrunnelser');
const { behandlinger } = require('./behandlinger');
const { mottatteopplysningertyper } = require('./mottatteopplysningertyper.js');
const { dokumenttyper } = require('./dokumenttyper');
const { brev } = require('./brev');
const { finansiering } = require('./finansiering');
const { forespoerseltyper } = require('./forespoerseltyper');
const { folketrygdloven_kap2_bestemmelser } = require('./folketrygdloven_kap2_bestemmelser');
const { innretningstyper } = require('./innretningstyper');
const { inntektskildetype } = require('./inntektskildetype');
const { innvilgelsesResultat } = require('./innvilgelsesResultat');
const { land_iso2 } = require('./land_iso2');
const { landkoder } = require('./landkoder');
const { lovvalgsbestemmelser } = require('./lovvalgsbestemmelser');
const { maritimtyper } = require('./maritimtyper');
const { mottakerroller } = require('./mottakerroller');
const { flyvningstyper } = require('./flyvningstyper');
const { medlemskapstyper } = require('./medlemskapstyper');
const { mottaksretning } = require('./mottaksretning');
const { oppgavetyper } = require('./oppgavetyper');
const { personstatuser } = require('./personstatuser');
const { representerer } = require('./representerer');
const { saksstatuser } = require('./saksstatuser');
const { sakstyper } = require('./sakstyper');
const { skatteplikttype } = require('./skatteplikttype');
const { sakstemaer } = require('./sakstemaer');
const { territoriekoder } = require('./territoriekoder');
const { trygdeavgift_typer } = require('./trygdeavgift_typer');
const { trygdeavgiftmottaker } = require('./trygdeavgiftmottaker');
const { trygdedekninger } = require('./trygdedekninger');
const { utfallregistreringunntak } = require('./utfallregistreringunntak');
const { vedleggstitler } = require('./vedleggstitler');
const { vedtakstyper } = require('./vedtakstyper');
const { vilkaar } = require('./vilkaar');
const { yrker } = require('./yrker');

const Transform  = require('./transform');

const KodeTermObjects = {
  aktoersroller,
  anmodningsperiodesvartyper,
  avgiftsdekning,
  avklartefaktatyper,
  avsendertyper,
  trygdeavtale_myndighetsland,
  behandlinger,
  mottatteopplysningertyper,
  begrunnelser,
  brev,
  dokumenttyper,
  finansiering,
  forespoerseltyper,
  folketrygdloven_kap2_bestemmelser,
  innretningstyper,
  inntektskildetype,
  innvilgelsesResultat,
  land_iso2,
  landkoder,
  lovvalgsbestemmelser,
  maritimtyper,
  mottakerroller,
  flyvningstyper,
  medlemskapstyper,
  mottaksretning,
  oppgavetyper,
  personstatuser,
  representerer,
  saksstatuser,
  sakstyper,
  skatteplikttype,
  sakstemaer,
  territoriekoder,
  trygdeavgift_typer,
  trygdeavgiftmottaker,
  trygdedekninger,
  utfallregistreringunntak,
  vedleggstitler,
  vedtakstyper,
  vilkaar,
  yrker,
};

const Koder = Transform.kodeverk2KodeSet(KodeTermObjects);
const KodeTermValues = Transform.kodeverk2KodeMap(KodeTermObjects);

module.exports.Koder = Koder;
module.exports.KTObjects = KodeTermObjects;
module.exports.Terms = KodeTermValues;
