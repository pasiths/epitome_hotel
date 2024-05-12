import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { customLogger } from "../utils/logger.js";
import loginUserId from "../utils/loginUserId.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      customLogger.error({
        message: "Unauthorized - No Token Provided",
        userID: "",
        originalUrl: "",
      });
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      customLogger.error({
        message: "Unauthorized - Invalid Token",
        userID: "",
        originalUrl: "",
      });
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      customLogger.error({
        message: "User not found",
        userID: "",
        originalUrl: "",
      });
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    customLogger.error({
      message: `Error in protectRoute middleware: ${error.message}`,
      userID: "",
      originalUrl: "",
    });
    // console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const protectAdminRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");
    const jobRole = user.jobRole;
    if (jobRole.toLowerCase() !== "admin") {
      customLogger.error({
        message: "Unauthorized user",
        userID: "",
        originalUrl: "",
      });
      return res.status(401).json({ error: "Unauthorized user" });
    }
    next();
  } catch (error) {
    customLogger.error({
      message: `Error in protectAdminRoute middleware: ${error.message}`,
      userID: "",
      originalUrl: "",
    });
    // console.error("Error in protectAdminRoute middleware: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
