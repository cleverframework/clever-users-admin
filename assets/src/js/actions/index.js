import { Request } from '../middlewares/api'
import * as types from '../constants/ActionTypes'
import { AUTH_URL } from '../constants/URLs'

function loginRequest (name) {
  return { type: types.LOGIN_REQUEST }
}

function loginSuccess (json) {
  return { type: types.LOGIN_SUCCESS, token: json.token }
}

function loginFailure (error) {
  return { type: types.LOGIN_FAILURE, error }
}

export function login (email, password) {
  return dispatch => {
    dispatch(loginRequest())
    Request.post(AUTH_URL, { email, password })
      .then(json => dispatch(loginSuccess(json)))
      .catch(err => dispatch(loginFailure(err)))
  }
}

function signupRequest (name) {
  return { type: types.SIGNUP_REQUEST }
}

function signupSuccess (json) {
  return { type: types.SIGNUP_SUCCESS, token: json.token }
}

function signupFailure (error) {
  return { type: types.SIGNUP_FAILURE, error }
}

export function signup (email, password, invitationCode) {
  return dispatch => {
    dispatch(signupRequest())
    Request.post(AUTH_URL, { email, password, invitationCode })
      .then(json => dispatch(signupSuccess(json)))
      .catch(err => dispatch(signupFailure(err)))
  }
}
