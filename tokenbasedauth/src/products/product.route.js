const AuthMiddleware = require("../auth/auth.middleware");
const ProductController = require("./product.controller");

const productRouter = require("express").Router();

productRouter.post("/", AuthMiddleware, ProductController.createProduct);

productRouter.get("/", AuthMiddleware, ProductController.getProduct);


module.exports = productRouter