import {
  SIGNIN_FIREBASE
} from '../../../actions/auth/types'

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}

export const authenticatedFirebaseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_FIREBASE:
      return { ...state, isSignedIn: true, userId: action.payload }
    default:
      return state
  }
}
