const { resultattyper } = require('./resultattyper');
const { status } = require('./status');
const { typer } = require('./typer');

const behandlinger = {
  resultattyper,
  status,
  typer
};

module.exports.behandlinger = behandlinger;
