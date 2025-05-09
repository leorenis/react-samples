import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.mjs'],
    coverage: {
      provider: 'v8',
      include: ['src/libs/**/*.mjs'],
      exclude: ['src/**/*.test.mjs', 'src/libs/index.mjs'],
      reporter: ['text', 'html']
    },
  },
});