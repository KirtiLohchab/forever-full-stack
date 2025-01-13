import express from "express";

import authUser from "./../middleware/auth.js";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controller/cartController.js";

const cartRouter = express.Router();
cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, updateCart);
cartRouter.post("/get", authUser, getUserCart);

export default cartRouter;
