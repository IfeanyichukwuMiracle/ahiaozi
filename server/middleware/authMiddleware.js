// normal authenticate and authorize middleware na 🦾
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");

const authenticate = async (req, res, next) => {
  try {
    // might use cookies for this instead of this
    const token = req.headers?.authorization.split(" ")[1];
    // verify token
    const result = jwt.verify(token, process.env.JWT_SECRET);
    if (!result)
      return next(new AppError("You are not authenticated man", 400, "Error"));
    // check if user exists
    const user = await User.findById(result.id);
    if (!user)
      return next(new AppError("You are not authenticated man", 400, "Error"));
    // set req.user
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Authentication Error!"));
  }
};

const authorizeTutor = async (req, res, next) => {
  try {
    if (req.user.role !== "tutor") {
      return next(
        new AppError(
          "You are not authorized to access this route",
          400,
          "error"
        )
      );
    }
    next();
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Authorization Error!"));
  }
};

const authorizeAffiliate = async (req, res, next) => {
  try {
    if (req.user.role !== "affiliate") {
      return next(
        new AppError(
          "You are not authorized to access this route",
          400,
          "error"
        )
      );
    }
    next();
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Authorization Error!"));
  }
};

module.exports = { authenticate, authorizeAffiliate, authorizeTutor };
