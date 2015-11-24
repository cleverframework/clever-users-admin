import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import * as types from '../constants/ActionTypes'

function auth (state = {
  isLoggingIn: false,
  loginError: null,
  isSigningUp: false,
  signupError: null,
  logged: false
}, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      // Do stuff
    case types.LOGIN_SUCCESS:
      // Do stuff
    case types.LOGIN_FAILURE:
      // Do stuff
    case types.SIGNUP_REQUEST:
      // Do stuff
    case types.SIGNUP_SUCCESS:
      // Do stuff
    case types.SIGNUP_FAILURE:
      // Do stuff
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth,
  router
})

export default rootReducer
