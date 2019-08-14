/**
 * Kodeverk/territorie- og landkoder
 * @module
 */
const { landkoder } = require('./landkoder');
const { territoriekoder } = require('./territoriekoder');

const territorie_og_landkoder = [...landkoder, ...territoriekoder].sort();

module.exports.territorie_og_landkoder = territorie_og_landkoder;
