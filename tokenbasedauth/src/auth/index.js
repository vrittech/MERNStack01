const User = require('../user/user')

const AuthService  = require('./auth.service');

module.exports = new AuthService(User);