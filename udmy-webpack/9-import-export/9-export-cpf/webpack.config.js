import HtmlWebpackPlugin from "html-webpack-plugin"

const config = {
  mode: 'development',
  entry: '/src/app.js',
  output: {
    publicPath: '/'
  },
  devServer: {
    port: 3009,
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      scriptLoading: 'module',
    })
  ]
}

export default config