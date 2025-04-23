import React from 'react'
import LanguageContext from '../../contexts/LanguageContext'

class Field extends React.Component {
  static contextType = LanguageContext
  // Consumindo informacoes de contexto por meio do this.context, por isso foi necessário declarar o static contextType acima.
  render() {
    const { language } = this.context
    const text = language === 'english' ? 'Name' : 'Nome'
    return (
      <div className={'ui field'}>
        <label>{text}</label>
        <input />
      </div>
    )
  }
}
export default Field
