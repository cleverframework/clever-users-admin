import React from 'react'
import { Route, Router } from 'react-router'
import App from './containers/App'
import LoginPage from './containers/LoginPage'
import SignupPage from './containers/SignupPage'

export default (
  <Route path='/' component={App}>
    <Route path='/login' component={LoginPage}/>
    <Route path='/signup' component={SignupPage}/>
  </Route>
)
