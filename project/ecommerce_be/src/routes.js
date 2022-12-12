const categoryRouter = require('./categories/category.routes');

const router = require('express').Router();


router.use('/categories', categoryRouter)

module.exports = router;