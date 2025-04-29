import { ModuleFederationConfig } from '@nx/module-federation';

const sharedLibraries = [
  "react",
  "react-dom"
];

const config: ModuleFederationConfig = {
  name: 'products',
  exposes: {
    './ProductsList': './src/components/ProductsList/ProductsList.tsx',
    './Types': './src/types.d.ts',
  },
  shared: (libraryName, sharedConfig) => {
    if (!sharedLibraries.includes(libraryName)) {
      return false;
    }
  }
}

export default config;