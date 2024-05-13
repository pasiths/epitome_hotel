import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { customLogger } from "../utils/logger.js";
import loginUserId from "../utils/loginUserId.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({
      $or: [{ username }, { emailAddress: username }],
      status: { $ne: 0 },
    });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      customLogger.error({
        message: "Invalid username or password",
        userID: "",
        originalUrl: req.originalUrl,
      });
      return res.status(400).json({ error: "Invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    customLogger.info({
      message: "Login successful",
      userID: user._id,
      originalUrl: req.originalUrl,
    });
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      emailAddress: user.emailAddress,
    });
  } catch (error) {
    customLogger.error({
      message: `Error in login controller: ${error.message}`,
      userID: "",
      originalUrl: req.originalUrl,
    });
    // console.error("Error in login controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    const userID = loginUserId(req);
    res.cookie("jwt", "", { maxAge: 0 });
    customLogger.info({
      message: "Logged out successfully",
      userID: userID,
      originalUrl: req.originalUrl,
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    customLogger.error({
      message: `Error in logout controller: ${error.message}`,
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    // console.error("Error in logout controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
