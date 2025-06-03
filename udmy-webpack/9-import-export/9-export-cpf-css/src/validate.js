import '../dist/app.css'
import { mount } from '../dist/index.bundle.js'

const root = document.getElementById('root')

  mount(root, {
    id: 'txtInput',
    name: 'txtInput',
    label: 'CPF Styled',
    value: '01234567890',
      onChange: (cpf) => {
        console.log('Validate: ', cpf)
      }
    }
  )