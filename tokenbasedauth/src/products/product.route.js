const { verifyUser, checkAdmin } = require("../auth/auth.middleware");
const ProductController = require("./product.controller");

const productRouter = require("express").Router();

productRouter.post("/", verifyUser, checkAdmin, ProductController.createProduct);

productRouter.get("/", verifyUser, ProductController.getProduct);


module.exports = productRouter