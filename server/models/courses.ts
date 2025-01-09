import mongoose from "mongoose";

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
      type: Number,
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
      select: false,
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

const courseModel = mongoose.model("courses", courseSchema);
export default courseModel;
