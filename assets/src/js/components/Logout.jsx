'use strict'

import React from 'react/addons'
import ReactMixin from 'react-mixin'
import { Route, RouteHandler, Link } from 'react-router'
import AuthService from '../services/AuthService'

export default class Logout extends React.Component {

  constructor () {
    super()
    this.state = {}
  }

  logout(e) {
    e.preventDefault()
    AuthService.logout()
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
      </div>
    )

  }
}

ReactMixin(Logout.prototype, React.addons.LinkedStateMixin)
