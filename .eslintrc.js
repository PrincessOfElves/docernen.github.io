module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-alert': 'off',
    'linebreak-style': 0,
    'no-useless-concat': 'off',
    'prefer-template': 'off',
    'object-curly-newline': 'off',
  },
};
