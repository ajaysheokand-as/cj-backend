const Products = require('../models/product')
const getProducts = async (req, res) => {
  try {
    const response = await Products.find();
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

module.exports = { ProductDetailsController, RelatedProductsController,getProducts};

