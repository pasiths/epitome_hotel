import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateRandomPassword from "../utils/generateRandomPassword.js";
import { customLogger } from "../utils/logger.js";
import loginUserId from "../utils/loginUserId.js";

export const insertUser = async (req, res) => {
  try {
    const {
      fullName,
      birthday,
      gender,
      address,
      contactNumber,
      emailAddress,
      username,
      jobRole,
    } = req.body;
    const existingUser = await User.findOne({
      $or: [{ username }, { emailAddress }],
    });
    if (existingUser) {
      customLogger.error({
        message: "Username or Email already exists",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      return res
        .status(400)
        .json({ error: "Username or Email already exists" });
    }
    const password = generateRandomPassword();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullName,
      birthday,
      gender,
      address,
      contactNumber,
      emailAddress,
      username,
      password: hashedPassword,
      jobRole,
      status: 1,
    });
    if (newUser) {
      await newUser.save();
      customLogger.info({
        message: "User added successfully",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        emailAddress: newUser.emailAddress,
        username: newUser.username,
        profilePic: newUser.profilePic,
        password: password,
      });
    } else {
      customLogger.error({
        message: "Invalid user data",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    customLogger.error({
      message: `Error in insert user controller, ${error.message}`,
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    // console.error("Error in insert user controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await User.findById(id).select("status");
    if (userData.status === "0") {
      customLogger.error({
        message: "User not found",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      return res.status(404).json({ error: "User not found" });
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (updatedUser.matchedCount === 0) {
      customLogger.error({
        message: "User not found or no changes applied",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      return res
        .status(400)
        .json({ error: "User not found or no changes applied" });
    }
    customLogger.info({
      message: "User update successful",
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    res.status(200).json("User update successful");
  } catch (error) {
    customLogger.error({
      message: `Error in update user controller: ${error.message}`,
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    // console.error("Error in update user controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await User.findById(id).select("status");
    if (userData.status === "0") {
      customLogger.error({
        message: "User not found",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      return res.status(404).json({ error: "User not found" });
    }
    const newStatus = "0";
    const deleteu = await User.findByIdAndUpdate(id, { status: newStatus });
    if (deleteu.matchedCount === 0) {
      customLogger.error({
        message: "User not found or already deleted",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      return res
        .status(400)
        .json({ error: "User not found or already deleted" });
    }
    customLogger.info({
      message: "User deletion successful",
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    res.status(200).json("User deletion successful");
  } catch (error) {
    customLogger.error({
      message: `Error in delete user controller: ${error.message}`,
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    // console.error("Error in delete user controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await User.findById(id).select(
      "fullName birthday gender address contactNumber emailAddress username jobRole status"
    );
    if (!users || users.status === "0") {
      customLogger.error({
        message: "No user found with the provided ID or no user data",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      return res
        .status(400)
        .json("No user found with the provided ID or no user data");
    }
    customLogger.info({
      message: "User retrieved successfully",
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    res.status(200).json(users);
  } catch (error) {
    customLogger.error({
      message: `Error in get user controller: ${error.message}`,
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    // console.error("Error in get user controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({ status: { $ne: 0 } }).select(
      "fullName birthday gender address contactNumber emailAddress username jobRole"
    );
    if (!users) {
      customLogger.error({
        message: "No users found or no user data",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      return res.status(400).json("No users found or no user data.");
    }
    customLogger.info({
      message: "Users retrieved successfully",
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    res.status(200).json(users);
  } catch (error) {
    customLogger.error({
      message: `Error in get all users controller: ${error.message}`,
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    // console.error("Error in get all users controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const changePassword = async (req, res) => {
  try {
    const id = req.params.id;
    const { password, newPassword } = req.body;
    const userData = await User.findById(id).select("status password");
    if (userData.status === "0") {
      customLogger.error({
        message: "User not found",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      userData?.password || ""
    );
    if (!isPasswordCorrect) {
      customLogger.error({
        message: "Current password is incorrect",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      return res.status(400).json({ error: "Current password is incorrect" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    const pc = await User.findByIdAndUpdate(id, { password: hashedPassword });
    if (pc.matchedCount === 0) {
      customLogger.error({
        message: "User not found or already deleted",
        userID: loginUserId(req),
        originalUrl: req.originalUrl,
      });
      return res
        .status(400)
        .json({ error: "User not found or already deleted" });
    }
    customLogger.info({
      message: "Password changed successfully",
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    res.status(200).json("Password changed successfully");
  } catch (error) {
    customLogger.error({
      message: `Error in changing user password controller: ${error.message}`,
      userID: loginUserId(req),
      originalUrl: req.originalUrl,
    });
    // console.error("Error in changing user password controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
