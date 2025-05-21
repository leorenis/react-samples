import { merge } from 'webpack-merge'
import common from './webpack.common.config.js'

const configProd = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/, // regex: x? indicate that x? is optional.
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.prod.json',
            }
          }
        ],
      }
    ]
  }
})

export default configProd