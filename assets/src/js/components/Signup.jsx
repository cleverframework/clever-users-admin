import React from 'react/addons'
import ReactMixin from 'react-mixin'
import Auth from '../services/AuthService'

export default class Signup extends React.Component {

  constructor () {
    super()
    this.state = {
      user: '',
      password: '',
      extra: ''
    }
  }

  signup (e) {
    e.preventDefault()
    Auth.signup(this.state.user, this.state.password, this.state.code)
      .catch(err => {
        alert('There\'s an error signing up')
        console.error('Error signing up', err)
      })
  }

  render () {
    return (
      <div className="login jumbotron center-block">
        <h1>Signup</h1>
        <form role="form">
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input type="text" valueLink={this.linkState('user')} className="form-control" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="extra">Invitation Code</label>
          <input type="text" valueLink={this.linkState('extra')} className="form-control" id="code" ref="code" placeholder="You need an invitation code to sign up :-)" />
        </div>
        <button type="submit" className="btn btn-default" onClick={this.signup.bind(this)}>Submit</button>
      </form>
    </div>
    )
  }
}

ReactMixin(Signup.prototype, React.addons.LinkedStateMixin)
