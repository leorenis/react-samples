const commonConfig = require('./webpack.config');
const prodConfig = {
  mode: 'production',
  optimization: {
    // configs
    ...commonConfig.optimization,
  }
};