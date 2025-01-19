const express = require("express");
const SectionRouter = express.Router();

import { createSection, getSections } from "../controllers/sections";

SectionRouter.get("/", getSections).post("/", createSection);

export default SectionRouter;
