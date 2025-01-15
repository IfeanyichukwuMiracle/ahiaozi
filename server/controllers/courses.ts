import { HttpStatusCodes as Stat } from "../config/http";

import { courseModel as Course } from "../models/courses";

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

    let tempCourses = Course.find({ ...queryObj })
      .populate("tutor", "firstname lastname")
      .sort("-createdAt");

    if (page && limit)
      tempCourses = tempCourses.limit(Number(limit)).skip(skip);

    const courses = await tempCourses;

    res
      .status(Stat.OK)
      .json({ msg: "successful", rowCount: courses.length, courses });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const course = await Course.findById(id).populate(
      "tutor",
      "firstname lastname"
    );

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
    const {
      name,
      price,
      description,
      thumbnail,
      previewVideo,
      language,
      commision,
    } = req.body;

    const tutor = req?.user?.id;

    if (
      !name ||
      !price ||
      !tutor ||
      !description ||
      !thumbnail ||
      !previewVideo ||
      !language ||
      !commision
    ) {
      res.status(Stat.NotFound).json({ msg: "Please input required fields" });
      return;
    }

    const course = await Course.create({ ...req.body, tutor });

    res.status(Stat.Created).json({ msg: "successful", course });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
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

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true }
    );

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

    const course = await Course.findByIdAndDelete(id);

    res.status(Stat.NoContent).json({
      msg: `course with id: ${course?._id} has been deleted successfully`,
    });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};
