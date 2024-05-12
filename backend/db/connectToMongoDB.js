import mongoose from "mongoose";
import { customLogger } from "../utils/logger.js";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    customLogger.info({
      message: "Connected to MongoDB",
      userID: "",
      originalUrl: "",
    });
    // console.log("Connected to MongoDB");
  } catch (error) {
    customLogger.error({
      message: `Error connecting to MongoDB: ${error.message}`,
      userID: "",
      originalUrl: "",
    });
    // console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongoDB;
