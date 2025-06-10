import globals from 'globals';
import pluginJs from '@eslint/js';
import { defineConfig } from 'eslint/config';

// const rules = pluginJs.configs.recommended;

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      // bypass
    },
  },
  {
    ignores: ['node_modules', 'coverage', 'dist', 'eslint.config.js'],
  },
]);
