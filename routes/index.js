'use strict'

// Packages dependencies
const router = require('express').Router()

// Exports
module.exports = function (UsersAdminPackage, app, config) {
  const jwtCookieName = config.auth.jwt.cookie
  router.get('/login', (req, res, next) => res.send(UsersAdminPackage.render('auth', { jwtCookieName })))
  router.get('/signup', (req, res, next) => res.send(UsersAdminPackage.render('auth', { jwtCookieName })))
  router.get('/logout', (req, res, next) => {
    res.clearCookie(jwtCookieName, { path: '/' })
    res.redirect('/login')
  })
  return router
}
