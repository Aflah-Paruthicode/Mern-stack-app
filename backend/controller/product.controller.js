import Product from "../models/products.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in getting products");
    res.status(404).json({ success: false, message: "server error" });
  }
};

export const addProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image || !product.description) {
    return res.status(400).json({ success: false, message: "please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in create product : ", error.message);
    console.log("error in adding product");
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const editProduct = async (req, res) => {
  let { id } = req.params;
  let product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "invalid product " });
  }

  try {
    let updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "invalid product " });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    console.log("error in deleting product : ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
