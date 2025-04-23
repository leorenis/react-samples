import React from 'react'

export default class SearchBar extends React.Component {
  state = { term: '' }
  onSearchTermSubmit = event => {
    event.preventDefault()
    const { term } = this.state
    const { onSearchSubmit } = this.props
    onSearchSubmit(term)
  }

  render() {
    const { term } = this.state
    return (
      <div className={'search-bar ui segment'}>
        <form onSubmit={this.onSearchTermSubmit} className={'ui form'}>
          <div className="field">
            <label>Video Search</label>
            <input
              type={'text'}
              value={term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}
