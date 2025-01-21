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
import UserRouter from "./routes/user";
import CartRouter from "./routes/cart";
import SectionRouter from "./routes/sections";
import LessonRouter from "./routes/lessons";
import WishListRouter from "./routes/wishlist";

// Using json middleware
app.use(express.json());

// Security middlewares
app.use(cors());
app.use(helmet());
app.use(xss());

// Route middlewares
app.use("/api/v0/auth/", AuthRouter);
app.use("/api/v0/users/", UserRouter);
app.use("/api/v0/courses/", CourseRouter);
app.use("/api/v0/cart/", CartRouter);
app.use("/api/v0/sections/", SectionRouter);
app.use("/api/v0/lessons/", LessonRouter);
app.use("/api/v0/wishlists/", WishListRouter);

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
