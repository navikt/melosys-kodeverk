/**
 * Kodeverk.
 * @module
 */
const { aktoerroller } = require('./aktoerroller');
const { begrunnelser } = require('./begrunnelser');
const { behandlinger } = require('./behandlinger');
const { dokumenttitler } = require('./dokumenttitler');
const { brev } = require('./brev');
const { finansiering } = require('./finansiering');
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
const { yrker } = require('./yrker');

const kodeverk = {
  aktoerroller,
  dokumenttitler,
  behandlinger,
  begrunnelser,
  brev,
  finansiering,
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
  yrker,
};

module.exports.kodeverk = kodeverk;

/**
 * Hent kodeverk
 * @param req
 * @param res
 */
module.exports.hent = (req, res) => {
  res.json(kodeverk);
};
