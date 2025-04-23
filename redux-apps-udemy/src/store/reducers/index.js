import { combineReducers } from 'redux'
import * as Songs from './songs'
import * as Posts from './posts'
import * as Users from './users'

export default combineReducers({
  songs: Songs.songsReducer,
  selectedSong: Songs.selectedSongReducer,
  posts: Posts.postsReducer,
  users: Users.usersReducer
})
