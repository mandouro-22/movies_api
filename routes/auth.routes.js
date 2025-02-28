import express from "express";
import * as authController from "../controller/auth.controller.js";
import { asyncHandler } from "../utils/helpers.js";
import { authentication } from "../middlewares/auth.middleware.js";
import { loginValidator } from "../validators/auth.validator.js";
import { validationRequest } from "../middlewares/validator.middleware.js";
import { registerValidator } from "../validators/auth.validator.js";

const auth = express.Router();

auth.post(
  "/login",
  loginValidator(),
  validationRequest,
  asyncHandler(authController.login)
);
auth.post(
  "/register",
  registerValidator(),
  validationRequest,
  asyncHandler(authController.register)
);

auth.get("/me", authentication, asyncHandler(authController.getUser));

export default auth;
