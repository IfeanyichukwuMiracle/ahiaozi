const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: {
        values: ["customer", "tutor", "affiliate"],
        message: "Role doesn't exist!",
      },
      default: "customer",
    },
    affiliateCode: {
      type: String,
      required: false,
    },
    commisionEarned: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
