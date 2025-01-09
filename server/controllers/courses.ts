import { HttpStatusCodes as Stat } from "../config/http";

import { courseModel as Course } from "../models/courses";

import { Request, Response } from "express";

export const getAllCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(Stat.OK).json({ msg: "successful" });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(Stat.OK).json({ msg: "successful" });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const createCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(Stat.Created).json({ msg: "successful" });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const addCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(Stat.Created).json({ msg: "successful" });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const updateCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(Stat.OK).json({ msg: "successful" });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};

export const deleteCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(Stat.NoContent).json({ msg: "successful" });
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred" });
  }
};
