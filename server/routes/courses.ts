const express = require("express");
const CourseRouter = express.Router();

import {
  getAllCourses,
  getCourse,
  deleteCourse,
  updateCourse,
  createCourse,
  addCourse,
} from "../controllers/courses";

CourseRouter.get("/", getAllCourses)
  .get("/:id", getCourse)
  .post("/", createCourse)
  .post("/add", addCourse)
  .patch("/:id", updateCourse)
  .delete("/:id", deleteCourse);

export default CourseRouter;
