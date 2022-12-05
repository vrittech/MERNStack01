const authRouter = require('../auth/auth.routes');
const productRouter = require('../products/product.route');

const router = require('express').Router()

router.use('/auth', authRouter);

router.use('/products', productRouter);

module.exports = router