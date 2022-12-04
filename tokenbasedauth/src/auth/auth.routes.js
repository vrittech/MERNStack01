const AuthController = require('./auth.controller');
const AuthMiddleware = require('./auth.middleware');

const authRouter = require('express').Router();

authRouter.post('/login', AuthController.login);

authRouter.post('/register', AuthController.register)

authRouter.get('/me', AuthMiddleware,AuthController.me)

module.exports = authRouter;
