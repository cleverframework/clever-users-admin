'use strict'

const cleverCore = require('clever-core')
const Package = cleverCore.Package

// Defining the Package
var UsersAdminPackage = new Package('users-admin')

// All CLEVER packages require registration
UsersApiPackage
  .attach({
    where: '/usersadmin'
  })
  .routes(['app', 'config'])
  .models()
  .register()
