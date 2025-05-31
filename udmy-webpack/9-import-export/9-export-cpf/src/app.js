import React, { StrictMode, useState } from 'react'
import { isCPF } from '@samplesleo/validations'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const InputCpf = (props) => {
  const { id, name, label, error, value, onChange } = props
  const [cpf, setCpf] = useState(value ?? '');
  const [errorMsg, setErrorMsg] = useState(null)

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
          onChange={(e) => handleChange(e)}
          onBlur={() => handleBlur()}
        />
        <div style={{ color: 'red', fontSize: '1rem' }}>
          {errorMsg}
        </div>
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
        value='01234567890'
        onChange={cpf => console.log(cpf)}
      />
    </div>
  </StrictMode>
)