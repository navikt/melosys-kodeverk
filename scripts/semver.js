const Util = require('./util');
const pjson = require('../package.json');

Util.writeSemverText(pjson.version);
console.log(pjson.version);

module.exports.semver = pjson.version;
