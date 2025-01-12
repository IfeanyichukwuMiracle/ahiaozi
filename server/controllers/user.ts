const bcrypt = require("bcryptjs");

import { HttpStatusCodes as Stat } from "../config/http";

import { userModel as User } from "../models/user";

import { Request, Response } from "express";

interface DataObjType {
  firstname?: string;
  lastname?: string;
  email?: string;
}

export const editUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstname, lastname, email } = req.body;
    const id = req?.user?.id;

    const lower = (text: string): string => {
      return text.toLocaleLowerCase();
    };

    const dataObj: DataObjType = {};

    if (firstname) {
      dataObj.firstname = lower(firstname);
    }
    if (lastname) {
      dataObj.lastname = lower(lastname);
    }
    if (email) {
      dataObj.email = lower(email);
    }

    if (!firstname && !lastname && !email) {
      res.status(Stat.NotFound).json({ msg: "All fields cannot be empty" });
      return;
    }

    if (email) {
      const user = await User.findById(id);
      if (user?.email !== dataObj?.email) {
        const emailExists = await User.findOne({ email: dataObj?.email });
        if (emailExists) {
          res.status(Stat.Conflict).json({ msg: "Email already exists" });
          return;
        }
      }
    }

    const newUser = await User.findByIdAndUpdate(
      id,
      { ...dataObj },
      { new: true, runValidators: true }
    );

    res
      .status(Stat.OK)
      .json({ msg: "user data updated successfully", newUser });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred", err });
  }
};

export const updatePassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    const id = req?.user?.id;

    if (!oldPassword || !newPassword || !confirmPassword) {
      res.status(Stat.NotFound).json({ msg: "All fields are required" });
      return;
    }

    const user = await User.findById(id);
    const passwordCorrect = await bcrypt.compare(oldPassword, user?.password);
    if (!passwordCorrect) {
      res.status(Stat.BadRequest).json({ msg: "Old password is not correct" });
      return;
    }

    if (newPassword.length < 8) {
      res
        .status(Stat.BadRequest)
        .json({ msg: "Password must be up to 8 characters" });
      return;
    }

    if (newPassword !== confirmPassword) {
      res.status(Stat.BadRequest).json({ msg: "Passwords do not match" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { password: hashedPassword },
      { new: true, runValidators: true }
    );

    res
      .status(Stat.OK)
      .json({ msg: "password updated successfully", user: updatedUser?._id });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred", err });
  }
};
