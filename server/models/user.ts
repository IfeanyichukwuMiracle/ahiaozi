import mongoose from "mongoose";

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
      validate: {
        validator: (email: string) => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(email);
        },
        message: "email not valid",
      },
    },
    password: {
      type: String,
      required: [true, "password is required"],
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
    accountNumber: Number,
    bankName: String,
  },
  { timestamps: true }
);

export const userModel = mongoose.model("Users", userSchema);
