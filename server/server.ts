require("dotenv").config();

const express = require("express");
const app = express();

import connectDB from "./config/conn";
import notFound from "./middlewares/notFound";

app.use(express.json());

app.use(notFound);

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
