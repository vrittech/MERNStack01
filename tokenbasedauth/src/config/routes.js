const authRouter = require('../auth/auth.routes');
const messagesRouter = require('../message/message.route');
const productRouter = require('../products/product.route');

const router = require('express').Router()

router.use('/auth', authRouter);

router.use('/products', productRouter);

router.use('/messages', messagesRouter);

module.exports = router