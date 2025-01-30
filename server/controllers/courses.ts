import { HttpStatusCodes as Stat } from "../utils/http";
import { getVideoDuration } from "../utils/duration";

import { cloudinary } from "../middlewares/upload";

import { courseModel as Course } from "../models/courses";
import { SectionModel as Section } from "../models/sections";
import { LessonModel as Lesson } from "../models/lessons";

import { Request, Response } from "express";

interface QueryType {
  tutor?: string;
  language?: string;
  page?: number;
  limit?: number;
}

export const getAllCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { page, limit, tutor, language } = req.query as QueryType;
    const skip = (Number(page) - 1) * Number(limit);

    const queryObj: QueryType = {};

    if (tutor) queryObj.tutor = tutor;
    if (language) queryObj.language = language;

    let tempCourses = Course.find(queryObj)
      .populate("tutor", "firstname lastname")
      .sort("-createdAt");

    if (page && limit)
      tempCourses = tempCourses.limit(Number(limit)).skip(skip);

    const courses = await tempCourses;

    res
      .status(Stat.OK)
      .json({ msg: "successful", rowCount: courses.length, page, courses });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred", err });
  }
};

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const course = await Course.findById(id).populate(
      "tutor",
      "firstname lastname"
    );

    if (!course) {
      res.status(Stat.NotFound).json({
        msg: `no course with this id was found`,
      });
      return;
    }

    res.status(Stat.OK).json({ msg: "successful", course });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const createCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, price, description, language, commision } = req.body;

    // getting preview video file
    const previewFileName = req?.files?.previewVideo?.[0]?.originalname;
    const previewFilePath = req?.files?.previewVideo?.[0]?.path;

    // getting thumbnail file
    const thumbFileName = req?.files?.thumbnail?.[0]?.originalname;
    const thumbFilePath = req?.files?.thumbnail[0]?.path;

    // save preview video to cloud
    const previewUploadResult = await cloudinary.uploader.upload(
      previewFilePath,
      {
        folder: "ahiaozi_course_preview_videos",
        resource_type: "video",
        public_id: previewFileName,
      }
    );

    // save thumbnail to cloud
    const thumbUploadResult = await cloudinary.uploader.upload(thumbFilePath, {
      folder: "ahiaozi_course_thumbnails",
      resource_type: "image",
      public_id: thumbFileName,
    });
    const previewVideo = previewUploadResult.url;
    const thumbnail = thumbUploadResult.url;

    // getting duration of preview video
    const duration = await getVideoDuration(previewFilePath);

    // User
    const tutor = req?.user?.id;
    const authority = req?.user?.role;

    if (!name || !price || !tutor || !description || !language || !commision) {
      res.status(Stat.NotFound).json({ msg: "Please input required fields" });
      return;
    }

    if (authority !== "tutor") {
      res
        .status(Stat.Unauthorized)
        .json({ msg: "Sorry, you're not authorzied to create a course" });
      return;
    }

    const courseObj = {
      ...req.body,
      tutor,
      previewVideo,
      thumbnail,
      duration,
      name: name.toLowerCase(),
      description: description.toLowerCase(),
      language: language.toLowerCase(),
    };
    const course = await Course.create({ ...courseObj });

    res.status(Stat.Created).json({ msg: "successful", course });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred", err });
  }
};

export const updateCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      body: { name, price, description, language, commision },
      params: { id },
    } = req;

    const tutor = req?.user?.id;

    if (
      !name &&
      !price &&
      !tutor &&
      !req?.files?.previewVideo &&
      !req?.files?.thumbnail &&
      !description &&
      !description &&
      !language &&
      !commision
    ) {
      res.status(Stat.NotFound).json({ msg: "All fields cannot be empty" });
      return;
    }

    const courseObj = {
      ...req.body,
      tutor,
      name: name?.toLowerCase(),
      description: description?.toLowerCase(),
      language: language?.toLowerCase(),
    };

    // getting and uploading preview video file if exists
    if (req.files?.previewVideo) {
      const previewFileName = req?.files?.previewVideo?.[0]?.originalname;
      const previewFilePath = req?.files?.previewVideo?.[0]?.path;

      // save preview video to cloud
      const previewUploadResult = await cloudinary.uploader.upload(
        previewFilePath,
        {
          folder: "ahiaozi_course_preview_videos",
          resource_type: "video",
          public_id: previewFileName,
        }
      );
      courseObj.duration = await getVideoDuration(previewFilePath);
      courseObj.previewVideo = previewUploadResult.url;
    }

    // getting thumbnail file
    if (req.files?.thumbnail) {
      const thumbFileName = req?.files?.thumbnail?.[0]?.originalname;
      const thumbFilePath = req?.files?.thumbnail[0]?.path;
      // save thumbnail to cloud
      const thumbUploadResult = await cloudinary.uploader.upload(
        thumbFilePath,
        {
          folder: "ahiaozi_course_thumbnails",
          resource_type: "image",
          public_id: thumbFileName,
        }
      );
      courseObj.thumbnail = thumbUploadResult.url;
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { ...courseObj },
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      res.status(Stat.NotFound).json({
        msg: `no course with this id was found`,
      });
      return;
    }

    res.status(Stat.OK).json({ msg: "successful", updatedCourse });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred", err });
  }
};

export const deleteCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    await Section.deleteMany({ course: id });
    await Lesson.deleteMany({ course: id });
    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      res.status(Stat.NotFound).json({
        msg: `no course with this id was found`,
      });
      return;
    }

    res.status(Stat.OK).json({
      msg: `course with id: ${course?._id} has been deleted successfully`,
    });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};
