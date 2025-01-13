const express = require("express");
const UserRouter = express.Router();

import authenticate from "../middlewares/auth";

import {
  getAllUsers,
  getUser,
  editUser,
  updatePassword,
  removeUser,
} from "../controllers/user";

UserRouter.get("/all", getAllUsers)
  .get("/user/:id", getUser)
  .patch("/edit", authenticate, editUser)
  .patch("/pass", authenticate, updatePassword)
  .delete("/user/:id", removeUser);

export default UserRouter;
