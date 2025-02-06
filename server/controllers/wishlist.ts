import { HttpStatusCodes as Stat } from "../utils/http";

import { WishListModel as WishList } from "../models/wishlist";

import { Request, Response } from "express";

interface QueryObjType {
  user?: string;
  user_id?: string;
  course?: string;
  course_id?: string;
}

export const addToWishlist = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { course_id } = req.query;
    const user_id = req?.user?.id;

    const wishlist = await WishList.create({
      user: user_id,
      course: course_id,
    });

    res.status(Stat.OK).json({ msg: `added to wishlist`, wishlist });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const getWishLists = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { course_id, user_id } = req.query as QueryObjType;

    const queryObj: QueryObjType = {};

    if (user_id) queryObj.user = user_id;
    if (course_id) queryObj.course = course_id;

    const wishlist = await WishList.find({ ...queryObj });

    res.status(Stat.OK).json({ msg: `successful`, wishlist });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const removeFromWishList = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    await WishList.findByIdAndDelete(id);

    res.status(Stat.OK).json({ msg: `removed from wishlist`, wishlist: id });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};
