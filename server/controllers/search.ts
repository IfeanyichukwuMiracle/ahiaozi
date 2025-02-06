import { HttpStatusCodes as Stat } from "../utils/http";

import { courseModel as Course } from "../models/courses";
import { userModel as User } from "../models/user";

import { Request, Response } from "express";

export const searchCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { query } = req.query;

    const result = await Course.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    res.status(Stat.OK).json({ msg: "successful", result });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const searchUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { query } = req.query;

    const result = await User.find({
      $or: [
        { firstname: { $regex: query, $options: "i" } },
        { lastname: { $regex: query, $options: "i" } },
      ],
    });
    res.status(Stat.OK).json({ msg: "successful", result });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};
