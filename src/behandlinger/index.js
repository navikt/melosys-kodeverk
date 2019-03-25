const { resultattyper } = require('./resultattyper');
const { status } = require('./status');
const { typer } = require('./typer');
const { tema } = require('./tema');

const behandlinger = {
  resultattyper,
  status,
  typer,
  tema,
};

module.exports.behandlinger = behandlinger;
