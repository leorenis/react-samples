import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/module-federation/rspack';
import mfConfig from './src/module-federation.config';

module.exports = composePlugins(withNx(), withReact(), withModuleFederation(mfConfig), (config) => {
  return config;
});
