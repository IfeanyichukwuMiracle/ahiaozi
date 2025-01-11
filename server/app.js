const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();

// routes
const userRoutes = require("./routes/userRoute");
const courseRoutes = require("./routes/courseRoute");

// start server
// startServer(process.env.MONGO_URI_2);
startServer(process.env.MONGO_URI);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// route middleware
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/course", courseRoutes);

// error handling middleware
app.use((err, req, res, next) => {
  return res.status(err.code).json({ status: err.type, message: err.message });
});

async function startServer(uri) {
  try {
    await mongoose.connect(uri);
    console.log(`Db connected`);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (e) {
    console.log(e);
    return;
  }
}
