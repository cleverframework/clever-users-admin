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
      return Object.assign({}, state, {
        isLoggingIn: true
      })
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggingIn: false,
        logged: true
      })
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoggingIn: false,
        loginError: action.error
      })
    case types.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isSigningUp: true
      })
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isSigningUp: false,
        logged: true
      })
    case types.SIGNUP_FAILURE:
      return Object.assign({}, state, {
        isSigningUp: false,
        signupError: action.error
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth,
  router
})

export default rootReducer
