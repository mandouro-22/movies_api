import { body } from "express-validator";

export function loginValidator() {
  return [
    body("email").notEmpty().withMessage("Email is required"),
    body("email").isEmail().withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("Password is required"),
  ];
}

export function registerValidator() {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").notEmpty().withMessage("Email is required"),
    body("email").isEmail().withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("Password is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];
}

export function createMovieValidator() {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("genre").notEmpty().withMessage("Genre is required"),
    body("releaseDate")
      .notEmpty()
      .withMessage("Release date is required")
      .isISO8601()
      .withMessage("Release date must be a valid date format"),
  ];
}
