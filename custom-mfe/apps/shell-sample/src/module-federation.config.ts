import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell-sample',
  remotes: [['products', 'products@http://localhost:4201/mf-manifest.json']],
};

export default config;
