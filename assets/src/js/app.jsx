'use strict'

import $ from 'jquery'
import foundation from 'foundation'
import React from 'react'
import Router, { Route } from 'react-router'
import Cookies from 'cookies-js'
import { JWT_KEY_NAME } from './constants/LoginConstants.js'
import AuthApp from './components/AuthApp'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import RouterContainer from './services/RouterContainer'
import LoginActions from './actions/LoginActions'


console.log(Cookies)

$(document).foundation()

const routes = (
  <Route handler={AuthApp}>
    <Route name="login" path="/" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="logout" handler={Logout}/>
  </Route>
)

const router = Router.create({ routes })
RouterContainer.set(router)

const jwt = localStorage.getItem(JWT_KEY_NAME)
if (jwt) LoginActions.loginUser(jwt)

router.run((Handler) => {
  React.render(<Handler />, document.getElementById('content'))
})
