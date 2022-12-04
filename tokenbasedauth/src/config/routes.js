const authRouter = require('../auth/auth.routes')

const router = require('express').Router()

router.use('/auth', authRouter);


module.exports = router