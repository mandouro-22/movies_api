import express from "express";
import * as watchListController from "../controller/watchList.controller.js";
import { asyncHandler } from "../utils/helpers.js";
import { authentication } from "../middlewares/auth.middleware.js";

const watchlists = express.Router();

watchlists.post(
  "/:movieId",
  authentication,
  asyncHandler(watchListController.WatchLists)
);

watchlists.get(
  "/",
  authentication,
  asyncHandler(watchListController.getWatchListsAll)
);

watchlists.delete(
  "/:movieId",
  authentication,
  asyncHandler(watchListController.removeMovieFromWatchList)
);

export { watchlists };
