/**
 * Kodeverk.
 * @module
 */
const { aktoersroller } = require('./aktoerroller');
const { anmodning } = require('./anmodning');
const { avklartefakta } = require('./avklartefakta');
const { begrunnelser } = require('./begrunnelser');
const { behandlinger } = require('./behandlinger');
const { dokument } = require('./dokument');
const { brev } = require('./brev');
const { finansiering } = require('./finansiering');
const { forespoersel } = require('./forespoersel');
const { landkoder } = require('./landkoder');
const { lovvalgsbestemmelser } = require('./lovvalgsbestemmelser');
const { maritimtyper } = require('./maritimtyper');
const { medlemskap } = require('./medlemskap');
const { mottaksretning } = require('./mottaksretning');
const { oppgavetyper } = require('./oppgavetyper');
const { representerer } = require('./representerer');
const { sak } = require('./sak');
const { territoriekoder } = require('./territoriekoder');
const { trygdedekninger } = require('./trygdedekninger');
const { utfall_registrering_unntak } = require('./utfall_registrering_unntak');
const { vedleggstitler } = require('./vedleggstitler');
const { vilkaar } = require('./vilkaar');
const { yrker } = require('./yrker');

const Transform  = require('./transform');

const KodeTermObjects = {
  aktoersroller,
  anmodning,
  avklartefakta,
  behandlinger,
  begrunnelser,
  brev,
  dokument,
  finansiering,
  forespoersel,
  landkoder,
  lovvalgsbestemmelser,
  maritimtyper,
  medlemskap,
  mottaksretning,
  oppgavetyper,
  representerer,
  sak,
  territoriekoder,
  trygdedekninger,
  utfall_registrering_unntak,
  vedleggstitler,
  vilkaar,
  yrker,
};

const Koder = Transform.kodeverk2KodeSet(KodeTermObjects);
const KodeTermValues = Transform.kodeverk2KodeMap(KodeTermObjects);

module.exports.Koder = Koder;
module.exports.KTObjects = KodeTermObjects;
module.exports.Terms = KodeTermValues;
