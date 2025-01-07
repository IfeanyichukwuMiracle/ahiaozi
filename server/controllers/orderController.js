const Order = require("../models/orderModel");
const AppError = require("../utils/AppError");

const placeOrder = async (req, res, next) => {
  try {
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Order Placement Error!"));
  }
};

const getOrders = async (req, res, next) => {
  try {
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Order Fetch Error!"));
  }
};

module.exports = { placeOrder, getOrders };
