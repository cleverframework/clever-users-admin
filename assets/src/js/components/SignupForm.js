import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class SignupForm extends Component {

  constructor () {
    super()
  }

  onSubmit (e) {
    const { onSignup } = this.props
    e.preventDefault()
    const email = this.refs.email.value
    const password = this.refs.password.value
    const invitationCode = this.refs.invitationCode.value
    onSignup(email, password, invitationCode)
  }

  renderForm () {
    const { isSigningUp } = this.props
    return (
      <form className='form-auth signup' onSubmit={this.onSubmit.bind(this)}>
        <h2 className='form-auth-heading'>Create an account</h2>
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
        <input
          type='text'
          name='invitationCode'
          ref='invitationCode'
          placeholder='Invitation Code'
          required={true}
          className='form-control' />
        <button
          type='submit'
          className='btn btn-lg btn-primary btn-block'
          disabled={isSigningUp}>Signup</button>
        <div className='forgot-password'>
          Already have an account? <Link to={'/login'}>Login</Link>.
        </div>
      </form>
    )
  }

  render () {
    return this.renderForm()
  }

}

SignupForm.propTypes = {
  isSigningUp: PropTypes.bool.isRequired,
  onSignup: PropTypes.func.isRequired
}
