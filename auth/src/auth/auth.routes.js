const AuthController = require('./auth.controller');

const authRouter = require('express').Router()

authRouter.post('/login', AuthController.loginUser)

authRouter.post('/register', AuthController.registerUser)


module.exports = authRouter;