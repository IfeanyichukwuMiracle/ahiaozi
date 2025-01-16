const express = require("express");
const UserRouter = express.Router();

import auth from "../middlewares/auth";

import {
  getAllUsers,
  getUser,
  editUser,
  updatePassword,
  removeUser,
} from "../controllers/user";

UserRouter.get("/all", getAllUsers)
  .get("/user/:id", getUser)
  .patch("/edit", auth, editUser)
  .patch("/pass", auth, updatePassword)
  .delete("/user/:id", auth, removeUser);

export default UserRouter;
