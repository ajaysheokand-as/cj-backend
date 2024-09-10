const Products = require('../models/product')

const getProducts = async (req, res) => {
  try {
    const response = await Products.find().sort({addedAt:-1});
    if (response?.length > 0) {
      res.json({
        data: response,
        status: 200,
        message: "Product Details retrieved successfully",
      });
    } else {
      res.json({
        data: [],
        status: 201,
        message: "Opps, No product found!",
      });
    }
  } catch (error) {
    res.json({
      status: 400,
      message: "Error in fetching product details!",
    });
  }
};

const addProduct = async (req, res) => {
  console.log("Req.body", req.body);
  try {
    const response = await Products.create(req.body);
    console.log("Response",response)
    if (response) {
      res.json({
        data: response,
        status: 201,
        message: "Product added successfully",
      });
    } else {
      res.json({
        status: 200,
        message: "Opps, Error",
      });
    }
  } catch (error) {
    res.json({
      status: 400,
      message: "Error",
    });
  }
};

 const ProductDetailsController = async (req, res) => {
  try {
    const { id } = req?.params; //Pass product id here which details you want
    const response = await Products.find({ _id: id });
    if (response?.length > 0) {
      res.json({
        data: response,
        status: 200,
        message: "Product Details retrieved successfully",
      });
    } else {
      res.json({
        data: [],
        status: 201,
        message: "Opps, No product found!",
      });
    }
  } catch (error) {
    res.json({
      status: 400,
      message: "Error in fetching product details!",
    });
  }
};

 const RelatedProductsController = async (req, res) => {
  try {
    const { id } = req?.params; //Pass product id of product details page
    const currentProduct = await Products.find({ _id: id });
    const Products = await Products.find();
    const relatedProducts = Products.filter(
      (item) => item?.id !== id && currentProduct?.category === item?.category //Products which have same categories as in given product(find by params id)
    );
    res.json({
      data: relatedProducts,
      status: 200,
      message: "Related products retrieved successfully!",
    });
  } catch (error) {
    res.json({
      status: 400,
      message: "Error in fetching related products!",
    });
  }
};

const UpdateProducts = async (req, res) => {
  console.log("Product Update")
  const { id } = req?.params;
  const {
    name,
    price,
    image,
    oldPrice,
    category,
    size,
    qty,
    ratings,
    brand,
    specification,
    ingredients,
    description_label,
    description_content,
    oils,
    fragrance,
  } = req?.body;
  try {
    const products = await Products.findById(id);

    if (!products) {
      return res.status(404).json({ msg: "Product not found" });
    }

    products.name = name || products.name;
    products.price = price || products.price;
    products.image = image || products.image;
    products.oldPrice = oldPrice || products.oldPrice;
    products.category = category || products.category;
    products.size = size || products.size;
    products.qty = qty || products.qty;
    products.ratings = ratings || products.ratings;
    products.brand = brand || products.brand;
    products.specification = specification || products.specification;
    products.ingredients = ingredients || products.ingredients;
    products.description_label = description_label || products.description_label;
    products.description_content = description_content || products.description_content;
    products.oils = oils || products.oils;
    products.fragrance = fragrance || products.fragrance;

    await products.save();
    res.json({ msg: "Products Updated Successfully", products });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { ProductDetailsController, RelatedProductsController,getProducts,addProduct,UpdateProducts};

