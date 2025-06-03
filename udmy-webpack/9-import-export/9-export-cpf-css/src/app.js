import React, { StrictMode, useState } from 'react'
import { isCPF } from '@samplesleo/validations'
import ReactDOM from 'react-dom/client'
import { DEV_MODE } from './shared/consts.js'
import './app.css'

const InputCpf = (props) => {
  const { id, name, label, error, value, onChange } = props
  const [cpf, setCpf] = useState(value ?? '');
  const [errorMsg, setErrorMsg] = useState(null)

  const handleChange = (event) => {
    setCpf(event.target.value)
    onChange(cpf)
  }

  const handleFocus = () => {
    if (!cpf)
      return
    setCpf(cpf.replace(/\D/g, ''))
  }

  const handleBlur = () => {
    if (!cpf)
      return

    const numbers = cpf.replace(/\D/g, '')
    const fmt = numbers.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-")
    setCpf(fmt)
    const isValid = isCPF(fmt)
    onChange({
      cpf: fmt,
      isValid
    })

    setErrorMsg(isValid ? null : error ?? 'CPF inválido')
  }

  return (
    <React.Fragment>
      <fieldset>
        <legend>{label}</legend>
        <input
          key={id}
          id={id}
          name={name}
          type='text'
          value={cpf}
          maxLength={11}
          onFocus={() => handleFocus()}
          onChange={(e) => handleChange(e)}
          onBlur={() => handleBlur()}
        />
        <div className='validation-error'>
          {errorMsg}
        </div>
      </fieldset>
    </React.Fragment>
  )
}

// Mount component function
const mount = (element, {id, name, label, value, onChange}) => {
  ReactDOM.createRoot(element).render(
    <StrictMode>
      <div>
        <InputCpf
          id={id}
          name={name}
          label={label}
          value={value}
          onChange={onChange}
        />
      </div>
    </StrictMode>
  )
}

// Performs only development mode
if (process.env.NODE_ENV === DEV_MODE) {
  const root = document.getElementById('root')
  mount(root, {
    id: 'txtInput',
    name: 'txtInput',
    label: 'CPF',
    value: '01234567890',
      onChange: (cpf) => {
        console.log('CPF: ', cpf)
      }
    }
  )
}

export { mount }