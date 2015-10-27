'use strict'

const BASE_URL = window.BASE_URL || 'http://localhost:3000'
const API_BASE_URL = window.BASE_URL || 'http://localhost:3001'

export default {
  BASE_URL: BASE_URL,
  API_BASE_URL: API_BASE_URL,
  LOGIN_URL: `${API_BASE_URL}/sessions/create`,
  SIGNUP_URL: `${API_BASE_URL}/users`,
  REDIRECTION_ON_AUTH_DONE: `${BASE_URL}/dashboard`,
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER'
}
