const authRouter = require('../auth/auth.routes')

const routes = require('express').Router()

routes.use('/auth', authRouter)

module.exports = routes;