const express = require("express");
const cors = require("cors");
require("./config/connection");
const {
  addItem,
  getItem,
  removeItem,
} = require("./controllers/cartController");
const {
  ProductDetailsController,
  RelatedProductsController,
  getProducts,
  addProduct,
  UpdateProducts,
} = require("./controllers/productController");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app
  .post("/cart", addItem)
  .get("/cart", getItem)
  .delete("/cart/:id", removeItem);

app.get("/product-details/:id", ProductDetailsController);
app.get("/related-products/:id", RelatedProductsController);
app.get("/products",getProducts);
app.post("/product",addProduct);
app.put('/product/:id', UpdateProducts);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
