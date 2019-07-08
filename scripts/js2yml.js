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
