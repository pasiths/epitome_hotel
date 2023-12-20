import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookies from "cookie-parser";

//import routes.js
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import itemRouter from './routes/item.js'
import orderRouter from './routes/order.js'

const PORT = process.env.PORT || 8080;

dotenv.config();

const app = express();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const URL = process.env.MONGODB_URL;

const connect = async () => {
  try {
    await mongoose.connect(URL, options);
    console.log("MongoDB Connected!");
  } catch (err) {
    console.error("Mongodb connection error! ", err);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected!");
});

app.use(cookies())
app.use(express.json());

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/item",itemRouter)
app.use("/api/order",orderRouter)

app.get("/test",(req,res)=>{
  res.send("Test the Sever")
})

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
  connect();
});