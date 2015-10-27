'use strict'

import { LOGIN_USER, LOGOUT_USER, REDIRECTION_ON_AUTH_DONE } from '../constants/LoginConstants.js'
import RouterContainer from '../services/RouterContainer'

export default {
  loginUser (jwt) {

    const savedJwt = localStorage.getItem('jwt')

    if (savedJwt !== jwt) {
      localStorage.setItem('jwt', jwt)

      // TODO: Set the cookie as well

      location.href = REDIRECTION_ON_AUTH_DONE
    } else {
      RouterContainer.get().transitionTo('/logout')
    }

  },
  logoutUser () {
    localStorage.removeItem('jwt')
    RouterContainer.get().transitionTo('/')
  }
}
