## Webpack Training

Training webpack 5. 

### Setup
- Webpack
- Webpack CLI
- Webpack Merge
- EcmaScript
- @vitest/coverage-v8
- Vitest
- Prettier
- Husky
- lint-staged
- @eslint/config@latest
- Typescript

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

<details>
<summary> package.json script config samples </summary>

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
</details>

### Common JS Modules vs ECMA
<details>
<summary>CommonJS definition</summary>

**CommonJS** is a module system for JavaScript, primarily used in server-side environments like `Node.js`. CommonJS uses the `require()` function to import modules and `module.exports` or `exports` to export values, functions, or objects. When a module is required for the first time, it is executed and cached. Subsequent calls to `require()` will return the cached version, improving performance.
</details>

file extension: `.mjs`, 
package.js config:
```json
 "type": "commonjs",
```
<details>
<summary>ECMAScript 2015 (ES6) modules</summary>

**ECMAScript 2015 (ES6)**, they provide a standardized system for importing and exporting functionalities between different files.
</details>

file extension: `.js`, 
package.js config:
```json
 "type": "module",
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

### ESLint

```bash
npm init @eslint/config@latest
```

<details>
<summary>Output eslint installation</summary>

```zsh
Need to install the following packages:
@eslint/create-config@1.8.2
Ok to proceed? (y)

What do you want to lint? · javascript
✔ How would you like to use ESLint? · syntax
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · no / yes
✔ Where does your code run? · browser, node
The config that you've selected requires the following dependencies:

eslint, globals
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
☕️Installing...
```
</details>


### Typescript
<details>
<summary>TypeScript is JavaScript with syntax for types.</summary>

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
</details>

To install
```zsh
npm install typescript --save-dev
```

Installing an specific version, taking the opportunity to install `ts-loader` plugin.
```zsh
npm install --save-dev typescript@5.7.2 ts-loader@9.5.1
```

Running
```zsh
npx tsc main.ts
```

<details>
<summary>tsconfig.json</summary>

```json
{
  "include": ["**/*.ts"],
  "compilerOptions": {
    "target": "ES2016",
    "module": "commonjs",
    "outDir": "./dist/",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```
</details>

### See more
- https://webpack.js.org/configuration/optimization/#optimizationsplitchunks
- https://typicode.github.io/husky/
- https://github.com/lint-staged/lint-staged
- https://www.typescriptlang.org/docs/
- https://www.typescriptlang.org/tsconfig/#module
- https://www.typescriptlang.org/docs/handbook/utility-types.html