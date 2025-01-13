import express from "express";
import adminAuth from "./../middleware/adminAuth.js";
import authUser from "./../middleware/auth.js";

import {
  allOrders,
  userOrders,
  updateStatus,
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  verifyStripe,
  verifyRazorpay,
} from "../controller/orderController.js";

const orderRouter = express.Router();

// Admin routes
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// payment gateway routes
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// User routes
orderRouter.post("/user-orders", authUser, userOrders);

// verifyStripe
orderRouter.post("/verifyStripe", authUser, verifyStripe);
orderRouter.post("/verifyRazorpay", verifyRazorpay);

export default orderRouter;
