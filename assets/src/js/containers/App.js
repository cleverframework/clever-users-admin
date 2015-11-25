import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactRedirect from 'react-redirect'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { logged, children } = this.props

    if (logged) return <ReactRedirect location='/'></ReactRedirect>

    return (
      <div className='wrapper'>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  logged: PropTypes.bool.isRequired,
  children: PropTypes.object
}

function mapStateToProps (state) {
  const { auth } = state
  const { logged } = auth
  return { logged }
}

export default connect(mapStateToProps)(App)
