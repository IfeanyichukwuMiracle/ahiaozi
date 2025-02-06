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
import { upload } from "../middlewares/upload";

const uploads = upload.fields([
  { name: "previewVideo", maxCount: 1 },
  { name: "thumbnail", maxCount: 1 },
]);

CourseRouter.get("/", getAllCourses)
  .get("/:id", getCourse)
  .post("/", [uploads, auth], createCourse)
  .patch("/:id", [uploads, auth], updateCourse)
  .delete("/:id", auth, deleteCourse);

export default CourseRouter;
