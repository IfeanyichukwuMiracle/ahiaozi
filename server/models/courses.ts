import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    enrolled: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    tutor: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Users",
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    previewVideo: {
      type: String,
    },
    language: {
      type: String,
      required: true,
    },
    commision: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export const courseModel = mongoose.model("Courses", courseSchema);
