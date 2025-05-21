## How to install

```zsh
npm i --save @samplesleo/validations
```


## How to use

```javascript
import { isCPF, isCNPJ } from @samplesleo/validations

if (isCPF('1234567890')) {...}

if (isCNPJ('12345678900001')) {...}
```