import { ModuleFederationConfig } from '@nx/module-federation';
import { library } from '@rspack/core';

const sharedLibraries = [
  "react",
  "react-dom"
];

const config: ModuleFederationConfig = {
  name: 'products',
  exposes: {
    './RemoteButton': './src/components/remote-button.tsx',
    './Types': './src/types.d.ts',
  },
  shared: (libraryName, sharedConfig) => {
    if (!sharedLibraries.includes(libraryName)) {
      return false;
    }
  }
}

export default config;