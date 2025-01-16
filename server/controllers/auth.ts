require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

import { HttpStatusCodes as Stat } from "../config/http";

import { userModel as User } from "../models/user";

import { Request, Response } from "express";

interface BodyType {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  cpassword?: string;
}

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstname, lastname, email, password, cpassword }: BodyType =
      req.body;

    if (!firstname || !lastname || !email || !password || !cpassword) {
      res.status(Stat.NotFound).json({ msg: "Please input required fields" });
      return;
    }

    const emailExists = await User?.findOne({ email: email?.toLowerCase() });
    if (emailExists) {
      res.status(Stat.Conflict).json({ msg: "Email already exists" });
      return;
    }

    if (password.length < 8) {
      res
        .status(Stat.BadRequest)
        .json({ msg: "Password must be up to 8 characters" });
      return;
    }

    if (password !== cpassword) {
      res.status(Stat.BadRequest).json({ msg: "Passwords do not match" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const dataObj: BodyType = {
      firstname: firstname?.toLowerCase(),
      lastname: lastname?.toLowerCase(),
      email: email?.toLowerCase(),
      password: hashedPassword,
    };

    const newUser = await User.create({ ...dataObj });

    const token = jwt.sign({ id: newUser?._id, role: newUser?.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });

    res
      .status(Stat.Created)
      .json({ msg: "account created successfully", token, user: newUser?._id });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred", err });
  }
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: BodyType = req.body;

    if (!email || !password) {
      res.status(Stat.BadRequest).json({ msg: "Please input required fields" });
      return;
    }

    const user = await User.findOne({ email: email?.toLowerCase() });
    if (!user) {
      res
        .status(Stat.NotFound)
        .json({ msg: "Sorry, this user does not exist" });
      return;
    }

    const passwordCorrect = await bcrypt.compare(password, user?.password);

    if (!passwordCorrect) {
      res
        .status(Stat.BadRequest)
        .json({ msg: "password incorrect, please try again" });
      return;
    }

    const token = jwt.sign(
      { id: user?._id, role: user?.role },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_LIFETIME,
      }
    );

    res
      .status(Stat.OK)
      .json({ msg: "signin successfull", user: user?._id, token });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred", err });
  }
};
