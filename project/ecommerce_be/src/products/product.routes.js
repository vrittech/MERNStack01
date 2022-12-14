const upload = require("../utils/upload");
const ProductController = require("./product.controller");
const productValidator = require("./product.validator");


const productRoute = require("express").Router();

productRoute.post("/",upload.single('image'),productValidator.validateCreateProduct,ProductController.createProduct);

productRoute.get("/",ProductController.getAllproducts);

module.exports = productRoute;