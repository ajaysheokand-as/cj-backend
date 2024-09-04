import { Router } from "express";
import {
  ProductDetailsController,
  RelatedProductsController,
} from "../controllers/productController.js";
const ProductsRoutes = Router();

ProductsRoutes.get("/product-details/:id", ProductDetailsController);
ProductsRoutes.get("/related-products/:id", RelatedProductsController);

export default ProductsRoutes;
