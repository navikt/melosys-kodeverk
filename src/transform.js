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
        obj[prop] = {...arrayToObjectSet(node[prop])};
        codes[verk] = {...codes[verk], ...obj};
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
        obj[prop] = {...arrayToObjectMap(node[prop])};
        codes[verk] = {...codes[verk], ...obj};
      }
    }
  }
  return codes;
};
module.exports.kodeverk2KodeMap = kodeverk2KodeMap;
