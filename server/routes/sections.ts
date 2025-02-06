const express = require("express");
const SectionRouter = express.Router();

import {
  createSection,
  getSections,
  updateSection,
  removeSection,
} from "../controllers/sections";

import auth from "../middlewares/auth";

SectionRouter.get("/", getSections)
  .post("/", auth, createSection)
  .patch("/", auth, updateSection)
  .delete("/", auth, removeSection);

export default SectionRouter;
