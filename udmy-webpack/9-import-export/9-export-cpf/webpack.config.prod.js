const config = {
  mode: 'production',
  entry: '/src/app.js',
  output: {
    library: {
      type: 'module'
    }
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