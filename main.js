'use strict'

const cleverCore = require('clever-core')
const Package = cleverCore.Package

// Defining the Package
var UsersAdminPackage = new Package('users-admin')

// All CLEVER packages require registration
UsersAdminPackage
  .attach({
    where: '/'
  })
  .routes(['app', 'config'])
  .models()
  .register()
