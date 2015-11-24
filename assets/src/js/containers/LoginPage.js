import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import login from '../actions'
import LoginForm from '../components/LoginForm'

class LoginPage extends Component {
  constructor (props) {
    super(props)
  }

  onLogin (email, password) {
    const { dispatch } = this.props
    dispatch(login(email, password))
  }

  render () {
    const { isLoggingIn, loginError } = this.props

    return (
      <div className='wrapper'>
        {!!loginError &&
          <div className='alert alert-danger' role='alert'>
            {loginError}
          </div>}
        <LoginForm
          isLoggingIn={isLoggingIn}
          onLogin={this.onLogin.bind(this)} />
      </div>
    )
  }
}

LoginPage.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
  loginError: PropTypes.string,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  const { auth } = state
  const { isLoggingIn, loginError } = auth

  return {
    isLoggingIn,
    loginError
  }
}

export default connect(mapStateToProps)(LoginPage)
