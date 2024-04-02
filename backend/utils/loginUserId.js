import jwt from "jsonwebtoken";

const loginUserId = (req) => {
  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userID = decoded.userId;
    return userID;
  } catch (error) {
    console.log("Error in loginUserID: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default loginUserId;
