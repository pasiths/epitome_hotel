import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import productsRoute from "./routes/products.routes.js";
import ordersRoute from "./routes/orders.routes.js"

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5050;

dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoute);
app.use("/api/orders", ordersRoute);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
