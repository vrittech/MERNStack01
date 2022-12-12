const CategoryModel = require("./category");
const CategoryService = require("./category.service");

const categoryService = new CategoryService(CategoryModel);

module.exports = categoryService;
