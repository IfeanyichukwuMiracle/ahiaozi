const express = require("express");
const LessonRouter = express.Router();

import { addLesson, getLessons } from "../controllers/lessons";

LessonRouter.get("/", getLessons).post("/", addLesson);

export default LessonRouter;
