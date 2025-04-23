import jsonPlaceholder from '../../../api/jsonPlaceholder'

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({ type: '@usersActions/FETCH_USER', payload: response.data })
}

/*export const fetchUser = id => async dispatch => _fetchUser(id, dispatch)

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({ type: '@usersActions/FETCH_USER', payload: response.data })
})
*/
