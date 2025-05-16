import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.mjs', 'src/**/*.test.js'],
    coverage: {
      provider: 'v8',
      include: [
        'src/libs/**/*.mjs',
        'src/libs/**/*.js',
      ],
      exclude: [
        'src/**/*.test.mjs',
        'src/libs/index.mjs',
        'src/**/*.test.js',
        'src/libs/index.js',
      ],
      reporter: ['text', 'html']
    },
  },
});