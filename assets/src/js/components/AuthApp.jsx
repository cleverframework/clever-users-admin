'use strict'

import React from 'react'
import { RouteHandler } from 'react-router'

export default class AuthApp extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="large-3 large-centered columns">
        <div className="login-box">
          <div className="row">
            <div className="large-12 columns">
              <h2>Clever V1</h2>
              <RouteHandler/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
