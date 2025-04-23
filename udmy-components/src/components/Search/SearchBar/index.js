import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: '' }

  onFormSubmit = event => {
    event.preventDefault()
    const { term } = this.state
    const { onSearchSubmit } = this.props
    onSearchSubmit(term)
  }

  render() {
    const { term } = this.state
    return (
      <div className={'ui segment'}>
        <form onSubmit={this.onFormSubmit} className={'ui form'}>
          <div className={'field'}>
            <label>Image Search</label>
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
