const arrayToObjectSet = (array) => {
  return array.reduce((obj, item) => {
    obj[item.kode] = item.kode;
    return obj;
  }, {});
};

const kodeverk2KodeSet = kodeverk => {
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
        let node_prop = node[prop];
        if (Array.isArray(node_prop)) {
          obj[prop] = {...arrayToObjectSet(node_prop)};
          codes[verk] = {...codes[verk], ...obj};
        }
        else {
          obj[prop] = {};
          for (const np in node_prop) {
            obj[prop][np] = {...arrayToObjectSet(node_prop[np])};
            codes[verk] = {...codes[verk], ...obj};
          }
        }
      }
    }
  }
  return codes;
};
module.exports.kodeverk2KodeSet = kodeverk2KodeSet;

const arrayToObjectMap = (array) => {
  return array.reduce((obj, item) => {
    obj[item.kode] = item.term;
    return obj;
  }, {});
};

const kodeverk2KodeMap = kodeverk => {
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
        let node_prop = node[prop];
        if (Array.isArray(node_prop)) {
          obj[prop] = {...arrayToObjectMap(node[prop])};
          codes[verk] = {...codes[verk], ...obj};
        }
        else {
          obj[prop] = {};
          for (const np in node_prop) {
            obj[prop][np] = {...arrayToObjectMap(node_prop[np])};
            codes[verk] = {...codes[verk], ...obj};
          }
        }
      }
    }
  }
  return codes;
};
module.exports.kodeverk2KodeMap = kodeverk2KodeMap;
