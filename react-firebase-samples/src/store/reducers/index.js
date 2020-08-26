import { combineReducers } from 'redux'

import * as Auth from './auth'
export default combineReducers({
  auth: Auth.authenticatedFirebaseReducer
})
