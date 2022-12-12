const CategoryController = require("./category.controller");
const categoryValidator = require("./category.validator");

const categoryRouter = require("express").Router();

categoryRouter.post(
  "/",
  categoryValidator.validateCreateCategory,
  CategoryController.createCategory
);

categoryRouter.get("/", CategoryController.getAllCategories);

module.exports = categoryRouter;
