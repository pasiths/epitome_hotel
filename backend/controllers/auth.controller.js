import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import generateRandomPassword from "../utils/generateRandomPassword.js";

export const signup = async (req, res) => {
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
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const uEmail = await User.findOne({ emailAddress });
    if (uEmail) {
      return res.status(400).json({ error: "Email address already exists" });
    }
    const password = generateRandomPassword();

    //AUTOMATED EMAIL SENDER HERE

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
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        emailAddress: newUser.emailAddress,
        username: newUser.username,
        profilePic: newUser.profilePic,
        password: password,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({
      $or: [{ username }, { emailAddress: username }],
    });
    const status = user.status;
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (status === 0 || !user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      emailAddress: user.emailAddress,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
