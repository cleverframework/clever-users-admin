'use strict'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import Cookies from 'cookies-js'
import { JWT_COOKIE_NAME } from './constants/settings.js'
import configureStore from './store/configureStore'
import { loginSuccess } from './actions'

const store = configureStore()

const token = Cookies.get(JWT_COOKIE_NAME)
if (token) store.dispatch(loginSuccess({ token }))

render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('root')
)
