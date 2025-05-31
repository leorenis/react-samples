import React, { StrictMode, useState } from 'react'
import { isCPF } from '@samplesleo/validations'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const InputCpf = (props) => {
  const { id, name, label, value, onChange } = props
  const [cpf, setCpf] = useState(value ?? '');

  const handleChange = (event) => {
    setCpf(event.target.value)
    onChange(cpf)
  }

  const handleBlur = () => {
    if (!cpf)
      return

    const numbers = cpf.replace(/\D/g, '')
    const fmt = numbers.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-")
    setCpf(fmt)
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
          onChange={(e) => handleChange(e)}
          onBlur={() => handleBlur()}
        />
      </fieldset>
    </React.Fragment>
  )
}

root.render(
  <StrictMode>
    <div>
      <InputCpf
        id='txtCpf'
        name='cpf'
        label='CPF'
        value='1234567890'
        onChange={cpf => console.log(cpf)}
      />
    </div>
  </StrictMode>
)