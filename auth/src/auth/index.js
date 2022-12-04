const User = require('../user/user')

const AuthService = require('./auth.service')

const authService = new AuthService(User)

module.exports = authService;