import { merge } from 'webpack'
import common from './webpack.common.config'

const configDev = merge(common, {
  mode: 'development',
  entry: {
    app: './src/main.ts'
  },
  output: {
    filename: '[name].bundle.cjs'
  }
})

export default configDev