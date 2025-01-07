const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    enrolled: {
      type: Number,
      default: 0,
    },
    price: {
      type: String,
      required: [true, "price is required"],
    },
    tutor: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    thumbnail: {
      type: String,
      required: [true, "thumbnail is required"],
    },
    previewVideo: {
      type: String,
      required: [true, "preview video is required"],
    },
    language: {
      type: String,
      required: [true, "language is required"],
    },
    commission: {
      type: Number,
      default: 0,
    },
    moduleContent: [
      {
        moduleName: String,
        moduleVideo: String,
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
