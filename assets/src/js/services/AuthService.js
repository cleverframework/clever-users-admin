import request from 'reqwest'
import when from 'when'
import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants'
import LoginActions from '../actions/LoginActions'

class AuthService {

  login (username, password) {
    const d = {
      username, password
    }
    console.log(d)
    return this.handleAuth(when(request({
      url: LOGIN_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: d
    })))
  }

  logout () {
    LoginActions.logoutUser()
  }

  signup (username, password, extra) {
    return this.handleAuth(when(request({
      url: SIGNUP_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password, extra
      }
    })))
  }

  handleAuth (loginPromise) {
    return loginPromise
      .then(response => {
        const jwt = response.id_token
        LoginActions.loginUser(jwt)
        return true
      })
  }
}

export default new AuthService()
