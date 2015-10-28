'use strict'

const BASE_URL = window.BASE_URL || 'http://localhost:3000'
const API_BASE_URL = window.BASE_URL || 'http://localhost:3000'
const KEY_PREFIX_NAME = window.COOKIE_PREFIX_NAME || 'cleverv1'

export default {
  BASE_URL: BASE_URL,
  API_BASE_URL: API_BASE_URL,
  LOGIN_URL: `${API_BASE_URL}/users/authenticate`,
  SIGNUP_URL: `${API_BASE_URL}/users`,
  REDIRECTION_ON_AUTH_DONE: `${BASE_URL}/dashboard`,
  JWT_KEY_NAME: `${KEY_PREFIX_NAME}.jwt`
}
