import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import PostList from './PostList'

const PostsApp = () => {
  return (
    <Provider store={store}>
      <div className={'ui container'}>
        <PostList />
      </div>
    </Provider>
  )
}

export default PostsApp
