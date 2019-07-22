const Ajv = require('ajv');
const ajv = new Ajv({allErrors: true});

const Util = require('./util');

const PROJECT_ROOT =`${process.cwd()}`;
const SRC_DIR = `${PROJECT_ROOT}/src`;
const SCHEMA_DIR = `${PROJECT_ROOT}/schema`;

const Kodeverk = require(SRC_DIR);

const schemajson = `${SCHEMA_DIR}/kodeverk-schema.json`;
const schema = Util.lesSchemaSync(schemajson);


const validate = ajv.compile(schema);

const runTest = data => {
  const valid = validate(data);

  if (valid) {
    console.log('\tValid!');
  }
  else {
    console.log('\tInvalid: ' + ajv.errorsText(validate.errors));
  }
  return valid;
};

const test = () => (
  runTest(Kodeverk.KTObjects)
);
module.exports.test = test;
