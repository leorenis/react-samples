
import {
  SIGNIN_FIREBASE,
  SIGNOUT_FIREBASE,
  START_FIREBASE_AUTH
} from './types'

export const startFirebaseAuth = authChangeCallback => dispatch => {
// TODO
  return {
    type: START_FIREBASE_AUTH,
    payload: {}
  }
}

export const signIn = userId => ({
  type: SIGNIN_FIREBASE,
  payload: userId
})

export const signOut = () => ({
  type: SIGNOUT_FIREBASE
})
