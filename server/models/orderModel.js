const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  courses: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
