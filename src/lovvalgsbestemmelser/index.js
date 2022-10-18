const {lovvalgbestemmelser_883_2004} = require('./lovvalgbestemmelser_883_2004');
const {lovvalgbestemmelser_987_2009} = require('./lovvalgbestemmelser_987_2009');
const {tilleggsbestemmelser_883_2004} = require('./tilleggsbestemmelser_883_2004');
const {overgangsregelbestemmelser} = require('./overgangsregelbestemmelser');
const {lovvalgbestemmelser_trygdeavtale_uk} = require('./lovvalgbestemmelser_trygdeavtale_uk');
const {lovvalgbestemmelser_trygdeavtale_usa} = require('./lovvalgbestemmelser_trygdeavtale_usa');

const lovvalgsbestemmelser = {
  lovvalgbestemmelser_883_2004,
  lovvalgbestemmelser_987_2009,
  tilleggsbestemmelser_883_2004,
  overgangsregelbestemmelser,
  lovvalgbestemmelser_trygdeavtale_uk,
  lovvalgbestemmelser_trygdeavtale_usa,
};
module.exports.lovvalgsbestemmelser = lovvalgsbestemmelser;
