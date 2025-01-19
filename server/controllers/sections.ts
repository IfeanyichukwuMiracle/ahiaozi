import { HttpStatusCodes as Stat } from "../config/http";

import { SectionModel as Section } from "../models/sections";

import { Request, Response } from "express";

export const getSections = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const sections = await Section.find({});

    res.status(Stat.OK).json({ msg: `successful`, sections });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const createSection = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { course_id } = req.query;
    const { name, number } = req.body;

    const sectionExists = await Section.find({ course_id, number });

    if (sectionExists) {
      res
        .status(Stat.Conflict)
        .json({ msg: `section ${number} already exists` });
      return;
    }

    const section = await Section.create({ course: course_id, name, number });

    res.status(Stat.OK).json({ msg: `section created successfully`, section });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};
