const fs = require('fs');
const Ajv = require('ajv');
const ajv = new Ajv({allErrors: true});

const PROJECT_ROOT =`${process.cwd()}`;
const SRC_DIR = `${PROJECT_ROOT}/src`;
const SCHEMA_DIR = `${PROJECT_ROOT}/schema`;

const Kodeverk = require(SRC_DIR);

const readFileSync = (path) => {
  return fs.readFileSync(path, 'utf8');
};
const readJsonAndParseSync = (path) => {
  return JSON.parse(readFileSync(path));
};
const lesSchemaSync = schemapath => {
  return readJsonAndParseSync(schemapath);
};

const schemajson = `${SCHEMA_DIR}/kodeverk-schema.json`;
const schema = lesSchemaSync(schemajson);


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
