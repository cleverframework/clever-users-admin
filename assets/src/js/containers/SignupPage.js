import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions'
import SignupForm from '../components/SignupForm'

class SignupPage extends Component {
  constructor (props) {
    super(props)
  }

  onSignup (email, password, invitationCode) {
    const { dispatch } = this.props
    dispatch(signup(email, password, invitationCode))
  }

  render () {
    const { isSigningUp, signupError } = this.props

    return (
      <div className='wrapper'>
        <SignupForm
          isSigningUp={isSigningUp}
          signupError={signupError}
          onSignup={this.onSignup.bind(this)} />
      </div>
    )
  }
}

SignupPage.propTypes = {
  isSigningUp: PropTypes.bool.isRequired,
  signupError: PropTypes.string,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  const { auth } = state
  const { isSigningUp, signupError } = auth

  return {
    isSigningUp,
    signupError
  }
}

export default connect(mapStateToProps)(SignupPage)
