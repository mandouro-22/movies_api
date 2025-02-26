import express from "express";
import * as authController from "../controller/auth.controller.js";
import { asyncHandler } from "../utils/helpers.js";
import { authentication } from "../middlewares/auth.middleware.js";

const auth = express.Router();

auth.post("/login", asyncHandler(authController.login));
auth.post("/register", asyncHandler(authController.register));

auth.get("/me", authentication, asyncHandler(authController.getUser));

export default auth;
