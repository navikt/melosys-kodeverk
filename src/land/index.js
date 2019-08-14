const { landkoder } = require('./landkoder');
const { territoriekoder } = require('./territoriekoder');
const landkoder_og_territoriekoder = [...landkoder, ...territoriekoder].sort((a, b) => a.term > b.term ? 1 : -1);

const land = {
  landkoder,
  territoriekoder,
  landkoder_og_territoriekoder,
};

module.exports.land = land;
