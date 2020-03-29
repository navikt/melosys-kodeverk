const { behandlingsresultattyper } = require('./behandlingsresultattyper');
const { behandlingsstatus } = require('./behandlingsstatus');
const { behandlingstyper } = require('./behandlingstyper');
const { behandlingstema } = require('./behandlingstema');

const behandlinger = {
  behandlingsresultattyper,
  behandlingsstatus,
  behandlingstema,
  behandlingstyper
};

module.exports.behandlinger = behandlinger;
