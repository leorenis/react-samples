import React, { StrictMode, useState } from 'react'

import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const InputCpf = (props) => {
  const { id, name, label, value, onChange } = props
  const [cpf, setCpf] = useState(value ?? '');

  const handleChange = (event) => {
    setCpf(event.target.value)
    onChange(cpf)
  }

  return (
    <React.Fragment>
      <label>{label}</label>
      <input
        key={id} 
        id={id} 
        name={name}
        type='text'
        value={cpf}
        onChange={(e) => handleChange(e)}
      /> 
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