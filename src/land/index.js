const { landkoder } = require('./landkoder');
const { territoriekoder } = require('./territoriekoder');
const territorie_og_landkoder = [...landkoder, ...territoriekoder].sort();

const land = {
  landkoder,
  territoriekoder,
  territorie_og_landkoder
};

module.exports.land = land;
