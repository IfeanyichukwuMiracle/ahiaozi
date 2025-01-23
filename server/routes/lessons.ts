const express = require("express");
const LessonRouter = express.Router();

import { addLesson, getLessons } from "../controllers/lessons";

import auth from "../middlewares/auth";
import { upload } from "../middlewares/upload";

LessonRouter.get("/", getLessons).post("/", upload.single("video"), addLesson);

export default LessonRouter;
