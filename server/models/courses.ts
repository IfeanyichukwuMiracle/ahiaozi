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
      ref: "User",
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    previewVideo: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
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

export const courseModel = mongoose.model("courses", courseSchema);
