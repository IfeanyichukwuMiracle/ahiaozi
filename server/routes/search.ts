const express = require("express");
const SearchRouter = express.Router();

import { searchCourse, searchUser } from "../controllers/search";

SearchRouter.post("/course", searchCourse).post("/user", searchUser);

export default SearchRouter;
