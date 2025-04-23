import jsonPlaceholder from '../../../api/jsonPlaceholder'
import _ from 'lodash'
import { fetchUser } from '../users'

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')
  dispatch({ type: '@postsActions/FETCH_POSTS', payload: response.data })
}

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}
