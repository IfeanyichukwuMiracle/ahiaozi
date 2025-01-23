import { HttpStatusCodes as Stat } from "../utils/http";

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

    // Files
    const previewVideo = req?.files?.previewVideo[0]?.path;
    const thumbnail = req?.files?.thumbnail[0]?.path;

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
      body: {
        name,
        price,
        description,
        thumbnail,
        previewVideo,
        language,
        commision,
      },
      params: { id },
    } = req;
    const tutor = req?.user?.id;

    if (
      !name &&
      !price &&
      !tutor &&
      !description &&
      !thumbnail &&
      !previewVideo &&
      !language &&
      !commision
    ) {
      res.status(Stat.NotFound).json({ msg: "All fields cannot be empty" });
      return;
    }

    const courseObj = {
      ...req.body,
      tutor,
      name: name.toLowerCase(),
      description: description.toLowerCase(),
      language: language.toLowerCase(),
    };

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
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
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
