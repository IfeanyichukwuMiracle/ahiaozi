import { HttpStatusCodes as Stat } from "../config/http";

import { userModel as User } from "../models/user";

import { Request, Response } from "express";

export const signin = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(Stat.Created).json({ msg: "successful" });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(Stat.Created).json({ msg: "successful" });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};
