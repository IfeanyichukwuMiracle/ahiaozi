const express = require("express");
const LessonRouter = express.Router();

import { addLesson } from "../controllers/lessons";

LessonRouter.post("/", addLesson);

export default LessonRouter;
