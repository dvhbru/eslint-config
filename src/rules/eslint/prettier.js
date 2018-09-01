/**
 * prettier rules
 */
module.exports = {
  // https://github.com/prettier/eslint-plugin-prettier
  'prettier/prettier': [
    'error',
    {
      // https://prettier.io/docs/en/options.html
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 120,
    },
  ],
};
