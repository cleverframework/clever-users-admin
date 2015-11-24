import React from 'react'
import { Route, Router } from 'react-router'
import LoginPage from './containers/LoginPage'
import SignupPage from './containers/SignupPage'

export default (
  <Router>
    <Route path='/login' component={LoginPage}/>
    <Route path='/signup' component={SignupPage}/>
  </Router>
)
