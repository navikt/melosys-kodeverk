const arrayToObjectSet = (array) => {
  return array.reduce((obj, item) => {
    obj[item.kode] = item.kode;  // NB! kode => kode
    return obj;
  }, {});
};

const arrayToObjectMap = (array) => {
  return array.reduce((obj, item) => {
    obj[item.kode] = item.term; // NB! kode => term
    return obj;
  }, {});
};

const kodeverk2Kode = (kodeverk, arrayReducerFunc) => {
  let codes = {};
  for (const verk in kodeverk) {
    const node = kodeverk[verk];
    if (Array.isArray(node)) {
      const obj = arrayReducerFunc(node);
      codes[verk] = { ...obj };
    }
    else {
      codes[verk] = {};
      for(const prop in node) {
        const obj = {};
        let node_prop = node[prop];
        if (Array.isArray(node_prop)) {
          obj[prop] = {...arrayReducerFunc(node_prop)};
        }
        else {
          obj[prop] = {};
          for (const np in node_prop) {
            obj[prop][np] = {...arrayToObjectSet(node_prop[np])};
          }
        }
        codes[verk] = {...codes[verk], ...obj};
      }
    }
  }
  return codes;
};
const kodeverk2KodeSet = kodeverk => kodeverk2Kode(kodeverk, arrayToObjectSet);
module.exports.kodeverk2KodeSet = kodeverk2KodeSet;

const kodeverk2KodeMap = kodeverk => kodeverk2Kode(kodeverk, arrayToObjectMap);
module.exports.kodeverk2KodeMap = kodeverk2KodeMap;
