import { HttpStatusCodes as Stat } from "../utils/http";

import { SectionModel as Section } from "../models/sections";
import { LessonModel as Lesson } from "../models/lessons";

import { Request, Response } from "express";

export const getSections = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const sections = await Section.find({}).sort("number");

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

    const sectionExists = await Section.findOne({ course: course_id, number });

    if (sectionExists) {
      res
        .status(Stat.Conflict)
        .json({ msg: `section ${number} already exists` });
      return;
    }

    const section = await Section.create({ course: course_id, name, number });

    res
      .status(Stat.Created)
      .json({ msg: `section created successfully`, section });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const updateSection = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { section_id } = req.query;
    const { name, number } = req.body;

    if (!name && !number && !section_id) {
      res
        .status(Stat.NotFound)
        .json({ msg: `Please fill in what is required` });
      return;
    }

    const section = await Section.findByIdAndUpdate(
      section_id,
      { ...req.body },
      { runValidators: true, new: true }
    );

    res.status(Stat.OK).json({ msg: `successful`, section });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred", err });
  }
};

export const removeSection = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { section_id } = req.query;

    // deleting all lessons under section
    await Lesson.deleteMany({ section: section_id });

    const sections = await Section.findByIdAndDelete(section_id);

    res.status(Stat.OK).json({ msg: `successful`, sections });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};
