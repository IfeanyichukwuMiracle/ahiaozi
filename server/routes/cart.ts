const express = require("express");
const CartRouter = express.Router();

import auth from "../middlewares/auth";

import {
  addCartItem,
  getAllCartItems,
  getUserCartItems,
  removeCartItem,
} from "../controllers/cart";

CartRouter.get("/all", getAllCartItems)
  .get("/", auth, getUserCartItems)
  .post("/", auth, addCartItem)
  .delete("/", auth, removeCartItem);

export default CartRouter;
