import React from 'react'

class LifeCicle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { latitude: null, errorMessage: null }
    console.log('construtor...')
  }

  componentDidMount() {
    this.handleCurrentPosition()
    console.log('My component was rendering to the screen.')
  }

  componentDidUpdate() {
    console.log('Component was just updated - it rerender!')
  }

  componentWillUnmount() {
    console.log('Component will unmount')
  }

  handleCurrentPosition() {
    return window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    )
  }

  render() {
    const { latitude } = this.state
    console.log('render: ', latitude)
    return <div />
  }
}

export default LifeCicle
