'use strict'

import React from 'react/addons'
import ReactMixin from 'react-mixin'
import { Link } from 'react-router'
import AuthService from '../services/AuthService'

export default class Signup extends React.Component {

  constructor () {
    super()
    this.state = {
      user: '',
      password: '',
      code: ''
    }
  }

  signup (e) {
    e.preventDefault()
    AuthService.signup(this.state.user, this.state.password, this.state.code)
      .catch(err => {
        alert('There\'s an error signing up')
        console.error('Error signing up', err)
      })
  }

  render () {

    return (
      <div className="signup">
        <form role="form">
          <div className="row">
            <div className="large-12 columns">
              <input type="text" valueLink={this.linkState('user')} id="email" ref="email" placeholder="Email" />
            </div>
          </div>
          <div className="row">
            <div className="large-12 columns">
              <input type="password" valueLink={this.linkState('password')} id="password" ref="password" placeholder="Password" />
            </div>
          </div>
          <div className="row">
            <div className="large-12 columns">
              <input type="text" valueLink={this.linkState('code')} id="code" ref="code" placeholder="You need an invitation code to sign up :-)" />
            </div>
          </div>
          <div className="row">
            <div className="large-12 large-centered columns">
              <button type="submit" className="button expand" onClick={this.signup.bind(this)}>Signup</button>
            </div>
          </div>
        </form>
        <p>Aready have an account? <Link to="login">Login</Link></p>
      </div>
    )

  }
}

ReactMixin(Signup.prototype, React.addons.LinkedStateMixin)
