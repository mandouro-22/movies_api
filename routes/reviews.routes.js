import express from "express";
import * as reviewsController from "../controller/reviewrs.controller.js";
import { asyncHandler } from "../utils/helpers.js";
import { authentication } from "../middlewares/auth.middleware.js";

const review = express.Router();

review.post(
  "/:movieId",
  authentication,
  asyncHandler(reviewsController.createReview)
);

review.get("/:movieId", asyncHandler(reviewsController.getReviewByMoveId));

export { review };
