import User from "../models/user.model.js";

export const updateUser = async (req, res) => {
  try {
    const { id } = req.query;
    let query = { status: { $ne: "0" } };
    if (id) {
      query._id = id;
    }
    const update = await User.updateMany(
      query,
      { $set: req.body },
      { new: true }
    );
    console.log(update.matchedCount)
    if (update.matchedCount === 0)
      return res
        .status(400)
        .json({ error: "User not found or no changes applied" });
    res.status(200).json("User update successful");
  } catch (error) {
    console.log("Error in update user controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.query;
    let query = { status: { $ne: "0" } };
    if (id) {
      query._id = id;
    }
    const newStatus = "0";
    const deleteu = await User.updateMany(query, { status: newStatus });
    if (deleteu.matchedCount === 0)
      return res
        .status(400)
        .json({ error: "User not found or already deleted" });
    res.status(200).json("User deletion successful");
  } catch (error) {
    console.log("Error in delete user controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.query;
    let query = { status: { $ne: 0 } };
    if (id) {
      query._id = id;
    }
    const users = await User.find(query).select(
      "fullName birthday gender address contactNumber emailAddress username jobRole"
    );
    if (!users)
      return res
        .status(400)
        .json("No user found with the provided ID or no user data.");
    res.status(200).json(users);
  } catch (error) {
    console.log("Error in get one user controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({ status: { $ne: 0 } }).select(
      "fullName birthday gender address contactNumber emailAddress username jobRole"
    );
    if (!users)
      return res
        .status(400)
        .json("No user found with the provided ID or no user data.");
    res.status(200).json(users);
  } catch (error) {
    console.log("Error in get all users controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
