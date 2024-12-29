const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const cors = require("cors");
// start server
startServer(`mongodb://127.0.0.1/rtk`);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
  return res.status(200).json({ status: "success" });
});

app.use((err, req, res, next) => {
  return res
    .status(500)
    .json({ status: "Server Error", message: "Oops! An error occurred." });
});

async function startServer(uri) {
  try {
    await mongoose.connect(uri);
    console.log(`DB Connected!`);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (e) {
    console.log(e);
    return;
  }
}
