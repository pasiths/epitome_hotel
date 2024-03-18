import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookies-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5050;

dotenv.config();

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
