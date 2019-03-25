const { resultattyper } = require('./resultattyper');
const { status } = require('./status');
const { tema } = require('./tema');
const { typer } = require('./typer');

const behandlinger = {
  resultattyper,
  status,
  typer,
  tema,
};

module.exports.behandlinger = behandlinger;
