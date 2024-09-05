const { Router } = require("express");
const {
  ProductDetailsController,
  RelatedProductsController,
} = require("../controllers/productController.js");
const ProductsRoutes = Router();

ProductsRoutes.get("/product-details/:id", ProductDetailsController);
ProductsRoutes.get("/related-products/:id", RelatedProductsController);

module.exports = {ProductsRoutes};
