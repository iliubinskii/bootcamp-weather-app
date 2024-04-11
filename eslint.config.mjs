import globals from 'globals';
import js from  '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  { rules: {} }
];
