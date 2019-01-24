const { Behandlingsresultattyper } = require('./behandlingsresultattyper');
const { Behandlingsstatus } = require('./behandlingsstatus');
const { Behandlingstyper } = require('./behandlingstyper');

const behandlinger = {
  Behandlingsresultattyper,
  Behandlingsstatus,
  Behandlingstyper
};

module.exports.Behandlinger = behandlinger;
