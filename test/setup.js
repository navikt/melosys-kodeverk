const Kodeverk = require('../src');
const testKodeverk = require('./helpers').testKodeverk;
const testKodeset = require('./helpers').testKodeset;

global.assert = require('chai').assert;
global.kodeverk = Kodeverk.kodeverk;
global.kodeset = Kodeverk.kodeset;
global.testKodeverk = testKodeverk;
global.testKodeset = testKodeset;
