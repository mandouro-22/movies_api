import { validationResult } from "express-validator";

export function validationRequest(req, res, next) {
  const errors = validationResult(req);

  if (errors.isEmpty()) return next();

  return res.status(400).json({ errors: errors.array() });
}
