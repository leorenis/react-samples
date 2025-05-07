const path = require('path');

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
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }
}