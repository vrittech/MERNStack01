const categoryRouter = require('./categories/category.routes');
const productRoute = require('./products/product.routes');

const router = require('express').Router();


router.use('/categories', categoryRouter)
router.use('/products', productRoute)


module.exports = router;