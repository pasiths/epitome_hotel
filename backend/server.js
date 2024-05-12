import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import expressWinton from "express-winston";

import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import productsRoute from "./routes/products.routes.js";
import ordersRoute from "./routes/orders.routes.js";
import { customLogger, logger } from "./utils/logger.js";
import { format, transports } from "winston";

const app = express();

app.use(express.json());
app.use(cookieParser());

dotenv.config();

const PORT = process.env.PORT || 5050;

app.use(
  expressWinton.logger({
    winstonInstance: logger,
    statusLevels: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoute);
app.use("/api/orders", ordersRoute);

const myFormat = format.printf(({ level, meta, timestamp }) => {
  return `${timestamp} ${level} : ${meta.message}`;
});

app.use(
  expressWinton.errorLogger({
    transports: [
      new transports.File({
        filename: "./logsFiles/logsInternalErrors.log",
      }),
    ],
    format: format.combine(format.json(), format.timestamp(), myFormat),
  })
);

app.listen(PORT, () => {
  connectToMongoDB();
  customLogger.info({
    message: `Server Running on port ${PORT}`,
    userID: "",
    originalUrl: "",
  });
  // console.log(`Server Running on port ${PORT}`);
});
