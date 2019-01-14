const Kodeverk = require('../src');
const testKodeverk = require('./helpers').testKodeverk;
const testKodeMap = require('./helpers').testKodeMap;

global.assert = require('chai').assert;
global.kodeverk = Kodeverk.kodeverk;
global.kodemap = Kodeverk.kodemap;
global.testKodeverk = testKodeverk;
global.testKodeMap = testKodeMap;
