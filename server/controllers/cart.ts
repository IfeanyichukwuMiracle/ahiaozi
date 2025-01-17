import { HttpStatusCodes as Stat } from "../config/http";

import { Request, Response } from "express";

import { cartModel as Cart } from "../models/cart";

export const getAllCartItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cartItems = await Cart.find({})
      .populate("item", "name price tutor thumbnail")
      .populate("user", "firstname lastname");

    res
      .status(Stat.OK)
      .json({ msg: `successfull`, rowCount: cartItems.length, cartItems });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const getUserCartItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = req?.user?.id;

    const cartItems = await Cart.find({ user })
      .populate("item", "name price tutor thumbnail")
      .populate("user", "firstname lastname");

    res
      .status(Stat.OK)
      .json({ msg: `successfull`, rowCount: cartItems.length, cartItems });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const addCartItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = req?.user?.id;
    const item = req?.query?.item;

    const cartItem = await Cart.create({ user, item });

    res.status(Stat.OK).json({ msg: `added to cart`, cartItem });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const removeCartItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req?.query?.item;

    const cartItem = await Cart.findByIdAndDelete(id);

    res
      .status(Stat.OK)
      .json({ msg: `cart item ${cartItem?._id} deleted successfully` });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};
