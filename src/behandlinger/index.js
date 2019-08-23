const { behandlingsresultat_typer } = require('./behandlingsresultat_typer');
const { behandlings_status } = require('./behandlings_status');
const { behandlings_typer } = require('./behandlings_typer');

const behandlinger = {
  behandlingsresultat_typer,
  behandlings_status,
  behandlings_typer
};

module.exports.behandlinger = behandlinger;
