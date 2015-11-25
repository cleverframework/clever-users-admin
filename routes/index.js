'use strict'

// Packages dependencies
const router = require('express').Router()

// JWT_COOKIE_NAME
const JWT_COOKIE_NAME = 'cleverv1.jwt'

// Exports
module.exports = function (UsersAdminPackage, app, config) {
  router.get('/login', (req, res, next) => res.send(UsersAdminPackage.render('auth')))
  router.get('/signup', (req, res, next) => res.send(UsersAdminPackage.render('auth')))
  router.get('/logout', (req, res, next) => {
    res.clearCookie(JWT_COOKIE_NAME, { path: '/' })
    res.redirect('/login')
  })
  return router
}
