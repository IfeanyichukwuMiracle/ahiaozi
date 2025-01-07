const User = require("../models/userModel");
const AppError = require("../utils/AppError");

const signup = async (req, res, next) => {
  try {
    const { password, ...rest } = req.body;
    // hash password
    const hashedPassword = password;
    // create user
    const user = await User.create({ ...rest, password: hashedPassword });
    // send response
    return res.status(200).json({ status: "success", data: user });
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Signup Error!"));
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // find user by email
    const user = await User.findOne({ email });
    if (!user)
      return next(
        new AppError("Incorrect email or password", 500, "Login Error!")
      );
    // verify password
    const isPwd = password === user.password;
    if (!isPwd)
      return next(
        new AppError("Incorrect email or password", 500, "Login Error!")
      );
    // create token
    const token = "3452gsdywei";
    // send response
    return res.status(200).json({ status: "success", token });
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Login Error!"));
  }
};

module.exports = { signup, login };
