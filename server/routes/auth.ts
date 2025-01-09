const express = require("express");
const AuthRouter = express.Router();

import { signin, signup } from "../controllers/auth";

AuthRouter.post("/signup", signup).post("/signin", signin);

export default AuthRouter;
