const INITIAL_STATE = []
export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@usersActions/FETCH_USER':
      return [...state, action.payload]
    default:
      return state
  }
}
