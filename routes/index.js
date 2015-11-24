'use strict'

// Packages dependencies
const router = require('express').Router()

// Exports
module.exports = function (UsersAdminPackage, app, config) {
  router.get('/login', (req, res, next) => res.send(UsersAdminPackage.render('auth')))
  router.get('/signup', (req, res, next) => res.send(UsersAdminPackage.render('auth')))
  router.get('/logout', (req, res, next) => {
    res.clearCookie('cleverToken', { path: '/' })
    res.redirect('/login')
  })
  return router
}
