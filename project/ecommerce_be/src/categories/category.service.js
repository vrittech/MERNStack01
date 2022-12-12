class CategoryService {
  Category;
  constructor(Category) {
    this.Category = Category;
  }

  async createCategory(data) {
    const category = await this.Category.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return category;
  }

  async getAllCategories(filters = {}) {
    const categories = await this.Category.find({
     ...filters
    });
    return categories;
  }
}
module.exports = CategoryService
