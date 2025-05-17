import { merge } from 'webpack-merge'
import common from './webpack.common.config.js'

const configProd = merge(common, {
  mode: 'production',
})

export default configProd