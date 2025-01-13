import express from "express";

import {
  loginUser,
  adminLogin,
  registerUser,
} from "../controller/userController.js";

const userRouter = express.Router();
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.post("/register", registerUser);
export default userRouter;
