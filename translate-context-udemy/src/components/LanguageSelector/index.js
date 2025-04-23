import React from 'react'
import LanguageContext from '../../contexts/LanguageContext'

class LanguageSelector extends React.Component {
  static contextType = LanguageContext
  render() {
    const { onLanguageChange } = this.context
    return (
      <div>
        Select a language:
        <i className={'flag us'} onClick={() => onLanguageChange('english')} />
        <i
          className={'flag br'}
          onClick={() => onLanguageChange('portuguese')}
        />
      </div>
    )
  }
}

export default LanguageSelector
