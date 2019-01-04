const pjson = require('../package.json');
console.log(pjson.version);
module.exports.semver = pjson.version;
