class ProductService {
  Product;
  constructor(Product) {
    this.Product = Product;
  }

  async insertProdcut(name, userid) {
    try {
      const addedProduct = await new this.Product({
        name,
        addedBy: userid,
      }).save();
      return addedProduct;
    } catch (err) {
      throw err;
    }
  }

  async getProducts() {
    try {
      const products = await this.Product.find({}).populate(
        {
          path: "addedBy",
          select : "-password -__v"
        },
       
      );
      
      return products;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ProductService;
