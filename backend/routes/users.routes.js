import express from "express";

import { protectAdminRoute, protectRoute } from "../middleware/protectRoute.js";
import {
  changePassword,
  deleteUser,
  getUser,
  getUsers,
  insertUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", protectRoute, protectAdminRoute, insertUser); // insert user
router.put("/update/:id", protectRoute, updateUser); //update
router.put("/changepassword/:id", protectRoute, changePassword); //change password
router.put("/delete/:id", protectRoute, protectAdminRoute, deleteUser); //Delete
router.get("/:id", protectRoute, getUser); // single user details get
router.get("/", protectRoute, protectAdminRoute, getUsers); // all user details get

export default router;
