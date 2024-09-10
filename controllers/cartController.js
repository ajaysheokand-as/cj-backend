const Cart = require("../models/cartSchema");

const addItem = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    console.log('Cart created:', cart);
    res.status(201).json({
      message: "Item added successfully",
      cart: cart,  
      success:true
    });
  } catch (error) {
    console.error("Error creating cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getItem = async (req, res) => {
  try {
    const result = await Cart.find().sort({addedAt: -1});
    console.log("result", result);
    res.status(200).json({success: true, message: "Data fetched Successfully", data: result});
  } catch (error) {
    console.error("Error fetching cart item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const removeItem = async (req,res) =>{
  console.log("Remove Item")
  const { id } = req?.params;
  try {
    const deletedItem = await Cart.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({success:false, message: "Item not found" });
    }

    return res.status(200).json({
      message: "Item deleted successfully",
      deletedItem: deletedItem,
      success:true
    });

  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


module.exports = { addItem, getItem, removeItem };
