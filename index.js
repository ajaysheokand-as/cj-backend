const express = require("express");
const cors = require("cors");
require("./config/connection")
const {addItem, getItem, removeItem} = require("./controllers/cartController")


const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post("/cart", addItem).get('/cart', getItem).delete("/cart/:id", removeItem);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
  