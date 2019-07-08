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

const kodeverk2Kode = (kodeverk, counter, arrayReducerFunc) => {
  if (counter > 5) {
    return {};
  }
  
  if (Array.isArray(kodeverk)) {
    return arrayReducerFunc(kodeverk);
  }
  
  let codes = {};
  for (const verk in kodeverk) {
    const node = kodeverk[verk];
    codes[verk] = kodeverk2Kode(node, counter + 1, arrayReducerFunc);
  }
  return codes;
};



const kodeverk2KodeSet = kodeverk => kodeverk2Kode(kodeverk, 1, arrayToObjectSet);
module.exports.kodeverk2KodeSet = kodeverk2KodeSet;

const kodeverk2KodeMap = kodeverk => kodeverk2Kode(kodeverk, 1, arrayToObjectMap);
module.exports.kodeverk2KodeMap = kodeverk2KodeMap;
