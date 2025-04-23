import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
  return song ? (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  ) : (
    <div>Select a song!</div>
  )
}
const mapStateToPropos = state => ({ song: state.selectedSong })
export default connect(mapStateToPropos)(SongDetail)
