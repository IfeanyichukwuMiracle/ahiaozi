const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "firstname is required"],
    },
    lastname: {
      type: String,
      required: [true, "lastname is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email already exists"],
      validate: {
        validator: (pwd) => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(pwd);
        },
        message: "email not valid",
      },
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [8, "password should be longer than 8 characters"],
    },
    role: {
      type: String,
      enum: {
        values: ["customer", "tutor", "affiliate"],
        message: "role is invalid",
      },
      default: "customer",
    },
    totalEarnings: Number,
    affiliateCode: String,
    totalCommission: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
