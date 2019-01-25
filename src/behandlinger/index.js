const { behandlingsresultattyper } = require('./behandlingsresultattyper');
const { behandlingsstatus } = require('./behandlingsstatus');
const { behandlingstyper } = require('./behandlingstyper');

const behandlinger = {
  behandlingsresultattyper,
  behandlingsstatus,
  behandlingstyper
};

module.exports.behandlinger = behandlinger;
