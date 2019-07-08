const MAX_LEVELS = 5;
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

const kodeverk2Kode = (kodeverk, arrayReducerFunc, counter = 1) => {
  if (counter > MAX_LEVELS) {
    console.error(`Max levels = ${MAX_LEVELS} Reached`);
    return {};
  }

  if (Array.isArray(kodeverk)) {
    return arrayReducerFunc(kodeverk);
  }

  let codes = {};
  for (const verk in kodeverk) {
    const node = kodeverk[verk];
    codes[verk] = kodeverk2Kode(node,  arrayReducerFunc, counter+1);
  }
  return codes;
};



const kodeverk2KodeSet = kodeverk => kodeverk2Kode(kodeverk, arrayToObjectSet);
module.exports.kodeverk2KodeSet = kodeverk2KodeSet;

const kodeverk2KodeMap = kodeverk => kodeverk2Kode(kodeverk, arrayToObjectMap);
module.exports.kodeverk2KodeMap = kodeverk2KodeMap;
