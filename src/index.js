/**
 * Kodeverk.
 * @module
 */
const memoize = require('lodash/memoize');

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
const { kontantytelser_eu_fo } = require('./kontantytelser_EU_FO');
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

const kodeverk = {
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
const kodeVerk =  memoize(function () {
  return kodeverk;
});
module.exports.kodeverk = kodeVerk();

const arrayToObjectSet = (array) => {
  return array.reduce((obj, item) => {
    obj[item.kode] = item.kode;
    return obj;
  }, {});
};

const transformKodeverk2KodeSet = () => {
  let codes = {};
  for (const verk in kodeverk) {
    const node = kodeverk[verk];
    if (Array.isArray(node)) {
      const obj = arrayToObjectSet(node);
      codes[verk] = { ...obj };
    }
    else {
      codes[verk] = {};
      for(const prop in node) {
        const obj = {};
        obj[prop] = {...arrayToObjectSet(node[prop])};
        codes[verk] = {...codes[verk], ...obj};
      }
    }
  }
  return codes;
};

const kodeSet = memoize(function () {
  return transformKodeverk2KodeSet();
});


module.exports.kodeset = kodeSet();

const arrayToObjectMap = (array) => {
  return array.reduce((obj, item) => {
    obj[item.kode] = item.term;
    return obj;
  }, {});
};

const transformKodeverk2KodeMap = () => {
  let codes = {};
  for (const verk in kodeverk) {
    const node = kodeverk[verk];
    if (Array.isArray(node)) {
      const obj = arrayToObjectMap(node);
      codes[verk] = { ...obj };
    }
    else {
      codes[verk] = {};
      for(const prop in node) {
        const obj = {};
        obj[prop] = {...arrayToObjectMap(node[prop])};
        codes[verk] = {...codes[verk], ...obj};
      }
    }
  }
  return codes;
};

const kodeMap = memoize(function () {
  return transformKodeverk2KodeMap();
});


module.exports.kodemap = kodeMap();

