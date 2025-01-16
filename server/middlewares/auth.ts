require("dotenv").config();

const jwt = require("jsonwebtoken");

import { HttpStatusCodes as Stat } from "../config/http";

import { Request, Response, NextFunction } from "express";

const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authorization = req?.headers?.authorization;
    const token = authorization?.split(" ")[1];

    if (!authorization || !authorization?.startsWith("Bearer ")) {
      res.status(Stat.Unauthorized).json({ msg: "Not authenticated!!" });
      return;
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { ...payload };
    next();
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred", err });
  }
};

export default auth;
