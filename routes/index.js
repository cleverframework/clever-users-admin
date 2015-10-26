'use strict'

// Require CleverCore
const CleverCore = require('clever-core')

// Packages dependencies
const express = require('express')
const router = express.Router()

// Exports
module.exports = function(UsersAdminPackage, app, config) {

  router.get('/auth', (req, res, next) => {
    res.send(UsersAdminPackage.render('layout'))
  })

  return router

}
