module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    Chart: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-use-before-define': ['error', { functions: false, classes: true }],
  },
};
