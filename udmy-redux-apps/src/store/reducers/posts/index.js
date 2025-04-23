const INITIAL_STATE = []
export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@postsActions/FETCH_POSTS':
      return action.payload
    default:
      return state
  }
}
