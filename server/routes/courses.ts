const express = require("express");
const CourseRouter = express.Router();

import {
  getAllCourses,
  getCourse,
  deleteCourse,
  updateCourse,
  createCourse,
} from "../controllers/courses";

import auth from "../middlewares/auth";

CourseRouter.get("/", getAllCourses)
  .get("/:id", getCourse)
  .post("/", auth, createCourse)
  .patch("/:id", updateCourse)
  .delete("/:id", deleteCourse);

export default CourseRouter;
