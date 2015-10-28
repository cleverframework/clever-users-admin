'use strict'

import { REDIRECTION_ON_AUTH_DONE, JWT_KEY_NAME } from '../constants/LoginConstants.js'
import RouterContainer from '../services/RouterContainer'
import Cookies from 'cookies-js'

export default {
  loginUser (jwt) {

    const savedJwt = localStorage.getItem(JWT_KEY_NAME)

    if (savedJwt !== jwt) {
      localStorage.setItem(JWT_KEY_NAME, jwt)
      Cookies.set(JWT_KEY_NAME, jwt)
      location.href = REDIRECTION_ON_AUTH_DONE
    } else {
      RouterContainer.get().transitionTo('/logout')
    }

  },
  logoutUser () {
    localStorage.removeItem(JWT_KEY_NAME)
    Cookies.expire(JWT_KEY_NAME)
    RouterContainer.get().transitionTo('/')
  }
}
