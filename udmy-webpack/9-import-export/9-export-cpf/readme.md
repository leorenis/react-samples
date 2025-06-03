## How to install

```zsh
npm i --save @samplesleo/input-cpf
```


## How to use

```javascript
import { mount } from '@samplesleo/input-cpf'

const root = document.getElementById('root')

  mount(root, {
    id: 'txtInput',
    name: 'txtInput',
    label: 'CPF',
    value: '01234567890',
      onChange: (cpf) => {
        console.log('Validate: ', cpf)
      }
    }
  )

```