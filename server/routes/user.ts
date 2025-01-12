const express = require("express");
const UserRouter = express.Router();

import authenticate from "../middlewares/auth";

import { editUser, updatePassword } from "../controllers/user";

UserRouter.patch("/edit", authenticate, editUser).patch(
  "/pass",
  authenticate,
  updatePassword
);

export default UserRouter;
