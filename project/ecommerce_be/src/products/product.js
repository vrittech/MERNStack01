const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: "Name is required",
    },
    price: {
      type: Number,
      required: "Product price is required",
    },
    qty: {
      type: Number,
      required: "Product Quantity is required",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;
