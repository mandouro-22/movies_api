import express from "express";
import * as moviesControllers from "../controller/movies.controller.js";
import { asyncHandler } from "../utils/helpers.js";
import { authenticateAdmin } from "../middlewares/admin.middleware.js";
import { authentication } from "../middlewares/auth.middleware.js";

const moveis = express.Router();
// get all movies
moveis.get("/", asyncHandler(moviesControllers.getAllMovies));

// get movies by id
moveis.get("/:id", asyncHandler(moviesControllers.getMovieById));

// set movie
moveis.post(
  "/",
  authentication,
  asyncHandler(authenticateAdmin),
  asyncHandler(moviesControllers.createMovie)
);
// update
moveis.put(
  "/:id",
  authentication,
  asyncHandler(authenticateAdmin),
  asyncHandler(moviesControllers.updateMovies)
);
// delete movie
moveis.delete(
  "/:id",
  authentication,
  asyncHandler(authenticateAdmin),
  asyncHandler(moviesControllers.deleteMovie)
);

export default moveis;
