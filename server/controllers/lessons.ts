import { HttpStatusCodes as Stat } from "../config/http";

import { LessonModel as Lesson } from "../models/lessons";

import { Request, Response } from "express";

interface QueryObjType {
  section?: string;
  section_id?: string;
  course?: string;
  course_id?: string;
}

export const getLessons = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { section_id, course_id } = req.query as QueryObjType;

    const queryObj: QueryObjType = {};

    if (section_id) queryObj.section = section_id;
    if (course_id) queryObj.course = course_id;

    const lesson = await Lesson.find(queryObj);
    res
      .status(Stat.OK)
      .json({ msg: `successful`, rowCount: lesson.length, lesson });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const addLesson = async (req: Request, res: Response): Promise<void> => {
  try {
    const { course_id, section_id } = req.query;
    const { number, title, video, duration } = req.body;

    const lesson = await Lesson.create({
      course: course_id,
      section: section_id,
      number,
      title,
      video,
      duration,
    });

    res.status(Stat.Created).json({ msg: `successful`, lesson });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const updateLesson = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { lesson_id } = req.query;

    const { number, title, video } = req.body;

    if (!number && !title && !video) {
      res
        .status(Stat.NotFound)
        .json({ msg: `Please fill in what is required` });
      return;
    }

    const lesson = await Lesson.findByIdAndUpdate(
      lesson_id,
      { ...req.body },
      { runValidators: true, new: true }
    );

    res.status(Stat.OK).json({ msg: `updated successfully`, lesson });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const deleteLesson = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { lesson_id } = req.query;
    const lesson = await Lesson.findByIdAndDelete(lesson_id);

    res.status(Stat.OK).json({ msg: `deleted successfully`, lesson });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};
