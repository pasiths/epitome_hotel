import express from "express";

import protectRoute from "../middleware/protectRoute.js";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.put("/update/:id", protectRoute,updateUser); //update
router.put("/delete/:id", protectRoute, deleteUser); //Delete
router.get("/:id", protectRoute, getUser); // single user details get
router.get("/", protectRoute, getUsers); // all user details get

export default router;
