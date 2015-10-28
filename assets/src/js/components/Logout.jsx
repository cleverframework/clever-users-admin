'use strict'

import React from 'react/addons'
import ReactMixin from 'react-mixin'
import { Link } from 'react-router'
import { REDIRECTION_ON_AUTH_DONE, JWT_KEY_NAME } from '../constants/LoginConstants.js'
import RouterContainer from '../services/RouterContainer'
import AuthService from '../services/AuthService'

export default class Logout extends React.Component {

  constructor () {

    // Redirect to login if user is not logged
    if (!localStorage.getItem(JWT_KEY_NAME)) {
      return RouterContainer.get().transitionTo('/')
    }

    super()
    this.state = {}
  }

  logout(e) {
    e.preventDefault()
    AuthService.logout()
  }

  redirect (e) {
    e.preventDefault()
    location.href = REDIRECTION_ON_AUTH_DONE
  }

  render () {
    return (
      <div className="logout">
        <form role="form">
          <div className="row">
            <div className="large-12 large-centered columns">
              <button type="submit" className="button expand" onClick={this.logout.bind(this)}>Logout</button>
            </div>
          </div>
        </form>
        <p>Don't want logout? <a href="#" onClick={this.redirect.bind(this)}>Go back</a>.</p>
      </div>
    )

  }
}

ReactMixin(Logout.prototype, React.addons.LinkedStateMixin)
