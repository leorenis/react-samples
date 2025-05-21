import { merge } from 'webpack-merge'
import common from './webpack.common.config.js'

const configDev = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/, // regex: x? indicate that x? is optional.
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.dev.json',
            }
          }
        ],
      }
    ]
  },
})

export default configDev