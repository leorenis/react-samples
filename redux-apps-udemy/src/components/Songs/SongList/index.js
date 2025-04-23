import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SongsActions from '../../../store/actions/songs'

const SongList = ({ songs, selectSong }) => (
  <div className={'ui middle aligned divided list'}>
    {songs.map(song => (
      <div key={song.id} className={'item'}>
        <div className={'right floated content'}>
          <div className={'ui button primary'} onClick={() => selectSong(song)}>
            Select
          </div>
        </div>
        <div className={'content'}>{song.title}</div>
      </div>
    ))}
  </div>
)

const mapStateToProps = state => ({
  songs: state.songs
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(SongsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList)
