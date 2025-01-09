require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");

import connectDB from "./config/conn";
import notFound from "./middlewares/notFound";

import AuthRouter from "./routes/auth";
import CourseRouter from "./routes/courses";

// Using json middleware
app.use(express.json());

// Route middlewares
app.use("/api/v0/auth/", AuthRouter);
app.use("/api/v0/course/", CourseRouter);

// Security middlewares
app.use(cors());
app.use(helmet());
app.use(xss());

// If route is not found
app.use(notFound);

// Spin off server
const startServer = async (): Promise<void> => {
  const port: string = process.env.PORT as string;
  const url: string = process.env.MONGO_URI as string;

  try {
    await connectDB(url);
    app.listen(port, () => console.log(`app listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
startServer();
