/**
 * Kodeverk.
 * @module
 */
const memoize = require('lodash/memoize');

const { AktoersRoller } = require('./aktoerroller');
const { AvklarteFakta } = require('./avklartefakta');
const { Begrunnelser } = require('./begrunnelser');
const { Behandlinger } = require('./behandlinger');
const { Dokumenttitler } = require('./dokumenttitler');
const { DokumentTyper } = require('./dokumenttyper');
const { Brev } = require('./brev');
const { Finansiering } = require('./finansiering');
const { ForespoerselTyper } = require('./forespoerseltyper');
const { HenleggelsesGrunner } = require('./henleggelsesgrunner');
const { Kontantytelser_EU_FO } = require('./kontantytelser_EU_FO');
const { Landkoder } = require('./landkoder');
const { Lovvalgsbestemmelser } = require('./lovvalgsbestemmelser');
const { MedlemskapsTyper } = require('./medlemskapstyper');
const { Mottaksretning } = require('./mottaksretning');
const { Oppgavetyper } = require('./oppgavetyper');
const { Representerer } = require('./representerer');
const { Saksstatuser } = require('./saksstatuser');
const { Sakstyper } = require('./sakstyper');
const { Trygdedekninger } = require('./trygdedekninger');
const { Vedleggstitler } = require('./vedleggstitler');
const { Vilkaar } = require('./vilkaar');
const { Yrker } = require('./yrker');

const kodeverk = {
  AktoersRoller,
  AvklarteFakta,
  Behandlinger,
  Begrunnelser,
  Brev,
  Dokumenttitler,
  DokumentTyper,
  Finansiering,
  ForespoerselTyper,
  HenleggelsesGrunner,
  Kontantytelser_EU_FO,
  Landkoder,
  Lovvalgsbestemmelser,
  MedlemskapsTyper,
  Mottaksretning,
  Oppgavetyper,
  Representerer,
  Saksstatuser,
  Sakstyper,
  Trygdedekninger,
  Vedleggstitler,
  Vilkaar,
  Yrker,
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

