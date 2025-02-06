import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Courses",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Users",
    },
  },
  { timestamps: true }
);

export const cartModel = mongoose.model("Cart", cartSchema);
