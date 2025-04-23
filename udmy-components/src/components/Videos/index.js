import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../../api/youtube'
import VideoDetail from './VideoDetail'

class VideosApp extends Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onSearchSubmit('')
  }

  onSearchSubmit = async term => {
    const response = await youtube.get('search', {
      params: {
        q: term
      }
    })
    const videos = response.data.items
    this.setState({ videos, selectedVideo: videos[0] })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    const { videos, selectedVideo } = this.state
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className={'ui grid'}>
          <div className={'ui row'}>
            <div className={'eleven wide column'}>
              <VideoDetail video={selectedVideo} />
            </div>
            <div className={'five wide column'}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideosApp
