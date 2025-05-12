## Webpack Training

Training webpack 5. 

### Setup
- Webpack
- Webpack CLI
- EcmaScript

Using node 22 by `.nvmrc`
```bash
nvm use
```

```bash
npm install --save-dev webpack@5.97.1
```

```bash
npm install --save-dev webpack-cli@6.0.1
```

```bash
npm i webpack-merge@6.0.1 -D
```

Instaling math js to training dependencies resolution on webpack.
```bash
npm install mathjs@14.0.1 --save
```

### Running webpack

To running webpack `--mode development`

```zsh
npx webpack --mode development
```

Production mode
```zsh
npx webpack --mode production
```

### Run Webpack via npm script (Recommended):

```json
    "scripts": {
      "build": "webpack --config webpack.config.js",
      "watch": "webpack --watch --config webpack.config.js",
      "start": "webpack serve --config webpack.config.js",
      "lint": "eslint",
      "lint:fix": "eslint --fix",
      "prettier": "prettier . --check",
      "prettier:fix": "prettier . --write --ignore-unknown",
      "prepare": "husky",
      "test": "vitest --run",
      "test:coverage": "vitest run --coverage",
      "pre-commit": "npm run prettier && npm run lint && npm run test"
    }
```


### Package manager - Libs

[Sample here](https://github.com/leorenis/react-samples/tree/master/udmy-webpack/5-libs)

Installing vitest. 
```zsh
npm install -D vitest@2.1.8 @vitest/coverage-v8@2.1.8
```

### Prettier && Husky && Lint staged

```bash
npm install -D --save-exact prettier
```

```zsh
npm install -D husky lint-staged
```

```zsh
npx husky init
```

```json
  "lint-staged": {
    "src/**/*.js": "npm run pre-commit"
  },
```

### See more
- https://webpack.js.org/configuration/optimization/#optimizationsplitchunks
- https://typicode.github.io/husky/
- https://github.com/lint-staged/lint-staged