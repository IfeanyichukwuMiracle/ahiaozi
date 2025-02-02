import path from "path";

import { HttpStatusCodes as Stat } from "../utils/http";
import { getVideoDuration } from "../utils/duration";

import { cloudinary } from "../middlewares/upload";

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
    const { number, title } = req.body;

    const filePath = req?.file?.path;

    // Checking extension
    const videoExt = path.parse(req?.file?.originalname).ext;
    if (videoExt !== ".mp4") {
      res.status(Stat.BadRequest).json({ msg: "File not format" });
      return;
    }

    // upload video to cloudinary
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      folder: "ahiaozi_lesson_videos",
      resource_type: "video",
    });
    // Optimizing video
    const video = cloudinary.url(`${uploadResult.public_id}.mp4`, {
      resource_type: "video",
      transformation: [
        { width: 1000, crop: "scale" },
        { quality: "auto" },
        { fetch_format: "auto" },
      ],
    });
    const duration = await getVideoDuration(filePath);

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

    const { number, title } = req.body;

    const courseObj = { ...req.body };

    if (req.file) {
      const videoPath = req?.file?.path;

      // Checking extension
      const videoExt = path.parse(req?.file?.originalname).ext;
      if (videoExt !== ".mp4") {
        res.status(Stat.BadRequest).json({ msg: "File not format" });
        return;
      }

      // save preview video to cloud
      const videoUploadResult = await cloudinary.uploader.upload(videoPath, {
        folder: "ahiaozi_lesson_videos",
        resource_type: "video",
      });
      // Optimizing video
      const video = cloudinary.url(`${videoUploadResult.public_id}.mp4`, {
        resource_type: "video",
        transformation: [
          { width: 1000, crop: "scale" },
          { quality: "auto" },
          { fetch_format: "auto" },
        ],
      });
      courseObj.duration = await getVideoDuration(videoPath);
      courseObj.video = video;
    }

    if (!number && !title) {
      res
        .status(Stat.NotFound)
        .json({ msg: `Please fill in what is required` });
      return;
    }

    const lesson = await Lesson.findByIdAndUpdate(
      lesson_id,
      { ...courseObj },
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
