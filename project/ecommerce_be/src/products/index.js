const ProductModel = require('./product');

const ProductService = require('./product.service');

module.exports = new ProductService(ProductModel)