## Notes about learning

- Throubleshoting
> Loading PostCSS "@tailwindcss/postcss" plugin failed: Unexpected token '??='
> solution: 
```zsh
nvm use 
```

### Loaders CSS

```bash
npm install --save-dev style-loader
```

```zsh
npm install --save-dev css-loader
```

```zsh
npm install --save-dev mini-css-extract-plugin
```

### Tailwind css (v4+)


**Plugins:**

- **style-loader:** injects the CSS into the page’s <style> tag
- **css-loader:** allows you to import CSS files in JavaScript (import './index.css')
- **@tailwindcss/postcss** PostCSS plugin that generates Tailwind CSS
- **postcss-loader:** processes the CSS with Tailwind, Autoprefixer, etc.

1. Install tailwind dependencies

```zsh
npm install --save-dev tailwindcss @tailwindcss/postcss postcss postcss-loader
```

> The package `@tailwindcss/postcss` was recently released to be the official Tailwind CSS plugin for PostCSS.

To use the `npx tailwindcss init` command, also install:

```zsh
npm install -D @tailwindcss/cli && npx tailwindcss init
```

2. Create or edit the configuration files

`tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
const config =  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This is the "purge"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
```

`postcss.config.js`:

```js
// para ESModules
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}

export default config
```

3. Create a file in `src/index.css` (or `tailwind.css`, whichever you prefer):
> [!TIP]
> and in version 4
```css
@import "tailwindcss";
```

4. Import this CSS in your entry point (e.g., `index.js` or `App.js`)

```js
import './index.css';
```

### See more
- https://webpack.js.org/configuration/optimization/#optimizationsplitchunks
- https://typicode.github.io/husky/
- https://github.com/lint-staged/lint-staged
- https://www.typescriptlang.org/docs/
- https://www.typescriptlang.org/tsconfig/#module
- https://www.typescriptlang.org/docs/handbook/utility-types.html
- https://semver.org/
- https://docs.npmjs.com/cli/v8/configuring-npm/package-json#files
- https://github.com/tailwindlabs/tailwindcss/discussions/15790
