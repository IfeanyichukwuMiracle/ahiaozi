import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Courses",
    },
  },
  { timestamps: true }
);

export const WishListModel = mongoose.model("wishList", wishListSchema);
