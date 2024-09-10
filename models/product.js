const mongoose = require("mongoose");

const { Schema, model, models } = mongoose;

const ProductSchema = new Schema({
  name: String,
  price: String,
  image: String,
  oldPrice: String,
  category: String,
  size: String,
  qty: String,
  ratings: String,
  brand: String,
  specification: String,
  ingredients: String,
  description_label: String,
  description_content: String,
  oils: String,
  fragrance: String,
  addedAt: {type:Date, default: Date.now}
});

const Product = mongoose.model('Products', ProductSchema);

module.exports = Product;
