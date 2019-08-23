const { begrunnelser } = require('./begrunnelser');
const { forutgaaende_medlemskap } = require('./forutgaaende_medlemskap');
const { vesentlig_virksomhet } = require('./vesentlig_virksomhet');

module.exports = {
  art_12_1 : {
    begrunnelser,
    forutgaaende_medlemskap,
    vesentlig_virksomhet,
  }
};
