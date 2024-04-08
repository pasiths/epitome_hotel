import express from "express";
import { protectAdminRoute, protectRoute } from "../middleware/protectRoute.js";
import {
  deleteProduct,
  getProduct,
  getProducts,
  insertProduct,
  updateProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

router.post("/", protectRoute, protectAdminRoute, insertProduct); // Insert product
router.put("/:id", protectRoute, protectAdminRoute, updateProduct); // Update Product
router.put("/delete/:id", protectRoute, protectAdminRoute, deleteProduct); // Update Product
router.get("/:id", protectRoute, getProduct); // single product details get
router.get("/", protectRoute, getProducts); // all products details get

export default router;
