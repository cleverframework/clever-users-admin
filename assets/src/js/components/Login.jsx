import React from 'react/addons'
import ReactMixin from 'react-mixin'
import Auth from '../services/AuthService'

export default class Login extends React.Component {

  constructor () {
    super()
    this.state = {
      user: '',
      password: ''
    }
  }

  login (e) {
    e.preventDefault()
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        alert('There\'s an error logging in')
        console.error('Error logging in', err)
      })
  }

  render () {
    return (
      <div className="login jumbotron center-block">
        <h1>Login</h1>
        <form role="form">
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input type="text" valueLink={this.linkState('user')} className="form-control" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
      </form>
    </div>
    )
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin)
