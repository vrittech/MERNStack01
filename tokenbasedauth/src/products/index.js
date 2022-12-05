const Product = require('./product');
const ProductService = require('./product.service');
const productService = new ProductService(Product);

module.exports = productService