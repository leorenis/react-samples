import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts', 'src/**/*.test.js'],
    coverage: {
      provider: 'v8',
      include: [
        'src/libs/**/*.ts',
        'src/libs/**/*.js',
      ],
      exclude: [
        'src/**/*.test.ts',
        'src/libs/index.ts',
        'src/main.ts',
        'src/**/*.test.js',
        'src/libs/index.js',
      ],
      reporter: ['text', 'html']
    },
  },
});