import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'
import Cookies from 'cookies-js'
import * as types from '../constants/ActionTypes'
import { JWT_COOKIE_NAME } from '../constants/settings.js'

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
        isLoggingIn: true,
        loginError: null,
        signupError: null // just in case
      })
    case types.LOGIN_SUCCESS:
      Cookies.set(JWT_COOKIE_NAME, action.token)
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
        isSigningUp: true,
        signupError: null,
        loginError: null  // just in case
      })
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isSigningUp: false
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
