'use strict'

import request from 'reqwest'
import when from 'when'
import { LOGIN_URL, SIGNUP_URL } from '../constants/LoginConstants'
import LoginActions from '../actions/LoginActions'

class AuthService {

  login (email, password) {
    return this.handleAuth(when(request({
      url: LOGIN_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        email, password
      }
    })))
  }

  logout () {
    LoginActions.logoutUser()
  }

  signup (email, password, code) {
    return this.handleAuth(when(request({
      url: SIGNUP_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        email, password, code
      }
    })))
  }

  handleAuth (loginPromise) {
    return loginPromise
      .then(response => {
        var jwt = response.token
        LoginActions.loginUser(jwt)
        return true
      })
  }
}

export default new AuthService()
