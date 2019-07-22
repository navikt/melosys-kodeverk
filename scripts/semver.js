const Util = require('./util');
const pjson = require('../package.json');

Util.writeSemverText(pjson.version, buildno = '');
console.log(pjson.version);

module.exports.semver = pjson.version;
