const { errorResponse, successResponse } = require("../utils/response.utils");
const Product = require(".");

const ProductController = {
  createProduct: async (req, res) => {
    const data = req.body;
    try {
      const product = await Product.createProduct(data);
      successResponse(res, "Product Created Successfully", product, 200);
    } catch (err) {
      errorResponse(res, err.message, err, 400);
    }
  },
  getAllproducts: async (req,res) => {
    try{
        let {filters} = req.query;
        filters = filters && filters !== '' ? {name :{$regex : filters, $options: "si"}}  : {}
        console.log(filters)
        const products = await Product.getAllProducts(filters);
        successResponse(res, "Products Fetched Successfully", products, 200);
    }catch(err){
        errorResponse(res, err.message, err, 400);
    }
  }
};

module.exports = ProductController
