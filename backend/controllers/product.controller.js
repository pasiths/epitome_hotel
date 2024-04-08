import Product from "../models/product.model.js";
import loginUserId from "../utils/loginUserId.js";

export const insertProduct = async (req, res) => {
  try {
    const userID = loginUserId(req);
    const { name, price, location, kitchen, img } = req.body;
    const names = await Product.findOne({ name });
    if (names) {
      return res.status(400).json({ error: "Product already exists" });
    }
    const newProduct = new Product({
      name,
      price,
      location,
      kitchen,
      img,
      addedUser: userID,
      status: 1,
    });
    await newProduct.save();
    res.status(201).json({
      ID: newProduct._id,
      Name: newProduct.name,
      Price: newProduct.price,
      Location: newProduct.location,
      Kitchen: newProduct.kitchen,
      IMG: newProduct.img,
      Adduser: newProduct.addedUser,
    });
  } catch (error) {
    console.log("Error in insert product controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productData = await Product.findById(id).select("status");
    if (productData.status === "0") {
      return res.status(404).json({ error: "Product not found" });
    }
    const update = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (update.matchedCount === 0)
      return res
        .status(400)
        .json({ error: "Product not found or no changes applied" });
    res.status(200).json("Product update successful");
  } catch (error) {
    console.log("Error in update product controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productData = await Product.findById(id).select("status");
    if (productData.status === "0") {
      return res.status(404).json({ error: "Product not found" });
    }
    const newStatus = "0";
    const deleteu = await Product.findByIdAndUpdate(id, { status: newStatus });
    if (deleteu.matchedCount === 0)
      return res
        .status(400)
        .json({ error: "Product not found or already deleted" });
    res.status(200).json("Product delete successful");
  } catch (error) {
    console.log("Error in delete product controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productData = await Product.findById(id).select(
      "name price img status"
    );
    if (productData.status === "0") {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    console.log("Error in delete product controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const productData = await Product.find({ status: { $ne: 0 } }).select(
      "name price img"
    );
    if (productData.status === "0") {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(productData);
  } catch (error) {
    console.log("Error in delete product controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
