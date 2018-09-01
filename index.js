const eslint = require('./src/rules/eslint');
const globals = require('./src/globals');

module.exports = {
  extends: ['prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: Object.assign({}, eslint),
  globals: Object.assign({}, globals),
};
