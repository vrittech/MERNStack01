class ProductService {
  ProductModel;
  constructor(ProductModel) {
    this.ProductModel = ProductModel;
  }

  async createProduct(data) {
    const product = await this.ProductModel.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return product;
  }

  async getAllProducts(filters){
    const products = await this.ProductModel.find({...filters}).populate('category');
    
    return products;
  }
}

module.exports = ProductService;
