const express = require("express");
const LessonRouter = express.Router();

import {
  addLesson,
  getLessons,
  updateLesson,
  deleteLesson,
} from "../controllers/lessons";

import auth from "../middlewares/auth";
import { upload } from "../middlewares/upload";

LessonRouter.get("/", getLessons)
  .post("/", [auth, upload.single("video")], addLesson)
  .patch("/", [auth, upload.single("video")], updateLesson)
  .delete("/", auth, deleteLesson);

export default LessonRouter;
