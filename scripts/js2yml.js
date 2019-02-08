'use strict';
const fs = require('fs');
const yaml = require('js-yaml');
const Kodeverk = require('../src/index');

const createDirIfnotExists = (dir) => !fs.existsSync(dir) && fs.mkdirSync(dir);
const writeYmlFileSync = (navn, ymlText) => {
  const path = `${DIST_DIR}/${navn}.yml`;
  fs.writeFileSync(path, ymlText);
};

const DIST_DIR = `${process.cwd()}/dist`;
createDirIfnotExists(DIST_DIR);

const ymlKodeMap = yaml.safeDump(Kodeverk.KTObjects);
writeYmlFileSync('kodemap', ymlKodeMap);
/*
const ymlKodeverk = yaml.safeDump(Kodeverk.kodeverk);
writeYmlFileSync('kodeverk', ymlKodeverk);
*/

/*
const jsonKodeset = JSON.stringify(Kodeverk.kodeset);
const jsonKodeVerk = JSON.stringify(Kodeverk.kodeverk);

const writeJsonFileSync = (navn, jsonText) => {
  const path = `${DIST_DIR}/${navn}.json`;
  fs.writeFileSync(path, jsonText);
};

writeJsonFileSync('kodeset', jsonKodeset);
writeJsonFileSync('kodeverk', jsonKodeVerk);
*/
