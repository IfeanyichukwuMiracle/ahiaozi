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
    res.status(Stat.OK).json({
      msg: "successful",
    });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred", err });
  }
};
