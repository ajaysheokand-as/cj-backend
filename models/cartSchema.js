const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  category: String,
  price: Number,
  description: String,
  qty:Number,
  brand:String,
  rating: String,
  img:String
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;