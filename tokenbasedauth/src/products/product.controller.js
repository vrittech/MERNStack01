const productService = require(".");

const ProductController = {
  createProduct: async (req, res) => {
    const { name } = req.body;
    const { _id } = req.user;
    //do some logic

    try {
      const product = await productService.insertProdcut(name, _id);

      return res.status(200).json({
        message: "Product created successfully",
        product,
      });
    } catch (err) {
      return res.status(400).json({
        err: err.message,
      });
    }
  },

  getProduct: async (req, res) => {
    const products = await productService.getProducts();

    return res.status(200).json({
        message : "Products found",
        products
    })
  }
};

module.exports = ProductController
