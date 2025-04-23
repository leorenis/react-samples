import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { spans: 0 }
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)
    this.setState({ spans })
    console.log()
  }

  render() {
    const { spans } = this.state
    const {
      image: { urls, alt_description }
    } = this.props
    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    )
  }
}
export default ImageCard
