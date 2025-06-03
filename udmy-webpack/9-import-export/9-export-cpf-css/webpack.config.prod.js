const config = {
  mode: 'production',
  entry: {
    index: '/src/app.js'
  },
  output: {
    // filename: '[name].[contenthash].js',
    filename: '[name].bundle.js',
    library: {
      type: 'module'
    },
    clean: true,
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      },
    ]
  }
}

export default config