const path = require('path');
const source = path.resolve(__dirname, '..');
const dist = path.resolve(source, 'dist');

module.exports = {
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'math'
    },
    math: {
      import: './src/lib/math.js'
    },
  },
  output: {
    path: dist,
    filename: '[name].bundle.js',
  },
}