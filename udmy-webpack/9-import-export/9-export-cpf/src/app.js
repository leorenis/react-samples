import { StrictMode, use, useState } from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const CpfInput = (props) => {
  const { id, name, label, value, onChange } = props
  const [cpf, setCpf] = useState(value)

  handleChange = (event) => {
    setCpf(event.target.value)
    onChange(cpf)
  }

  return (
    <input 
      key={id} 
      id={id} 
      name={name}
      type='text'
      value={cpf}
      placeholder={label}
      onChange={(e) => handleChange(e)}
    /> 
  )
}

root.render(
  <StrictMode>
    <div>
      Webpack component
    </div>
    <CpfInput
      id='txtCpf'
      name='cpf'
      label='CPF'
      vaue='1234567890'
      onChange={cpf => console.log(cpf)}
    />
  </StrictMode>
)