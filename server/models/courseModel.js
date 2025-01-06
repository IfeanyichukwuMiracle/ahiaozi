const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  tutor: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  price: Number,
  content: [String],
  thumbnail: String,
  titles: [String],
  onMarketplace: Boolean,
  commission: Number,
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
