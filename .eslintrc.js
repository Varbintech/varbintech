module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    amd: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'newline-after-var': ['error', 'always'],
    'no-duplicate-imports': 'error',
    'newline-before-return': 'error',
    'comma-dangle': ['error', 'always-multiline'],
  },
};
