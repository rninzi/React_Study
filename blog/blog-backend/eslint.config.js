const js = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-config-prettier');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettier.rules,
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
]);
