import express from "express";

import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.use("/login", login);
router.use("/logout", logout);

export default router;
