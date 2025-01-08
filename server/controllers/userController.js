const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    const { password, ...rest } = req.body;
    // hash password
    const hashedPassword = await bcryptjs.hash(password, 10);
    // create user
    await User.create({ ...rest, password: hashedPassword });
    // send response
    return res.status(200).json({ status: "success" });
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Signup Error!"));
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // find user by email
    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return next(
        new AppError("Incorrect email or password", 500, "Login Error!")
      );
    // verify password
    const isPwd = await bcryptjs.compare(password, user.password);
    if (!isPwd)
      return next(
        new AppError("Incorrect email or password", 500, "Login Error!")
      );
    // create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    // send response
    return res.status(200).json({ status: "success", token, role: user.role });
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Login Error!"));
  }
};

module.exports = { signup, login };
