const express = require("express");
const SectionRouter = express.Router();

import {
  createSection,
  getSections,
  updateSection,
  removeSection,
} from "../controllers/sections";

SectionRouter.get("/", getSections)
  .post("/", createSection)
  .patch("/", updateSection)
  .delete("/", removeSection);

export default SectionRouter;
