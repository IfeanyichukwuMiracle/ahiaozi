import { HttpStatusCodes as Stat } from "../config/http";

import { LessonModel as Lesson } from "../models/lessons";

import { Request, Response } from "express";

export const addLesson = async (req: Request, res: Response): Promise<void> => {
  try {
    const { course_id, section_id } = req.query;
    const { title, video, duration } = req.body;

    const lesson = await Lesson.create({
      course: course_id,
      section: section_id,
      title,
      video,
      duration,
    });

    res.status(Stat.OK).json({ msg: `successful`, lesson });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};
