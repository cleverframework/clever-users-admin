import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class LoginForm extends Component {

  constructor () {
    super()
  }

  onSubmit (e) {
    const { onLogin } = this.props
    e.preventDefault()
    const email = this.refs.name.value
    const password = this.refs.password.value
    onLogin(email, password)
  }

  renderForm () {
    const { isLoggingIn, loginError } = this.props
    return (
      <form className='form-auth login'>
        <h2 className='form-auth-heading'>Please login</h2>
        {!!loginError &&
          <div className='alert alert-danger error' role='alert'>
            {loginError}
          </div>}
        <input
          type='email'
          name='email'
          ref='email'
          placeholder='Email Address'
          required={true}
          autoFocus={true}
          className='form-control' />
        <input
          type='password'
          name='password'
          ref='password'
          placeholder='Password'
          required={true}
          className='form-control' />
        <button
          type='submit'
          className='btn btn-lg btn-primary btn-block'
          disabled={isLoggingIn}>Login</button>
        <div className='forgot-password'>
          {`Don't have an account?`} <Link to={'/signup'}>Signup</Link>.
        </div>
      </form>
    )
  }

  render () {
    return this.renderForm()
  }

}

LoginForm.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
  loginError: PropTypes.string,
  onLogin: PropTypes.func.isRequired
}
